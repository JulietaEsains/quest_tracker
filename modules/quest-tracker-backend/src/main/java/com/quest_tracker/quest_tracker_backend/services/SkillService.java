package com.quest_tracker.quest_tracker_backend.services;

import com.quest_tracker.quest_tracker_backend.entities.Skill;
import com.quest_tracker.quest_tracker_backend.repositories.SkillRepository;
import com.quest_tracker.quest_tracker_backend.transactional_services.SkillTransactionalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

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
}
