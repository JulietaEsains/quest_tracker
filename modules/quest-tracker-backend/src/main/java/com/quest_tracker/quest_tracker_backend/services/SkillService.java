package com.quest_tracker.quest_tracker_backend.services;

import com.quest_tracker.quest_tracker_backend.entities.Quest;
import com.quest_tracker.quest_tracker_backend.entities.Skill;
import com.quest_tracker.quest_tracker_backend.repositories.SkillRepository;
import com.quest_tracker.quest_tracker_backend.transactional_services.SkillTransactionalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
public class SkillService extends GenericService<Skill> implements SkillTransactionalService {
    @Autowired
    private SkillRepository repository;

    @Transactional
    public Skill save(Skill skill) throws Exception {
        skill.setLevel(1L);
        skill.setExperience(0L);
        return repository.save(skill);
    }

    @Transactional
    public Double findLevelPercentage(Long id) throws Exception {
        var opt = repository.findById(id);
        Skill skill = opt.get();
        Double currentLevelExperience = 0.0;
        if (skill.getLevel() == 1L) {
            currentLevelExperience = Double.valueOf(skill.getExperience());
        } else {
            currentLevelExperience = Double.valueOf(skill.getExperience() - 1000 * skill.getLevel());
        }
        return (currentLevelExperience/(1000 * skill.getLevel())) * 100;
    }

    @Transactional
    public List<Skill> completeQuest(Quest quest) throws Exception {
        List<Skill> updatedSkills = new ArrayList<>();
        for (Skill s : quest.getSkills()) {
            var opt = repository.findById(s.getId());
            Skill skill = opt.get();
            switch (quest.getDifficulty()) {
                case TRIVIAL:
                    skill.setExperience(skill.getExperience() + 5L);
                    break;
                case FÁCIL:
                    skill.setExperience(skill.getExperience() + 25L);
                    break;
                case NORMAL:
                    skill.setExperience(skill.getExperience() + 50L);
                    break;
                case DIFÍCIL:
                    skill.setExperience(skill.getExperience() + 100L);
                    break;
            }
            if (skill.getExperience() == skill.getLevel() * 1000) {
                skill.setLevel(skill.getLevel() + 1);
            }
            updatedSkills.add(repository.save(skill));
        }
        return updatedSkills;
    }
}
