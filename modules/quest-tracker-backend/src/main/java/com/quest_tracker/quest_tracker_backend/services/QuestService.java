package com.quest_tracker.quest_tracker_backend.services;

import com.quest_tracker.quest_tracker_backend.entities.Quest;
import com.quest_tracker.quest_tracker_backend.repositories.QuestRepository;
import com.quest_tracker.quest_tracker_backend.transactional_services.QuestTransactionalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class QuestService extends GenericService<Quest> implements QuestTransactionalService {
    @Autowired
    private QuestRepository repository;

    @Transactional
    public Quest save(Quest quest) throws Exception {
        quest.setCompleted(false);
        int amountOfSkills = quest.getSkills().size();

        switch (quest.getDifficulty()) {
            case TRIVIAL:
                quest.setExperience(amountOfSkills * 5L);
                quest.setGold(amountOfSkills * 5L);
                break;
            case FÁCIL:
                quest.setExperience(amountOfSkills * 25L);
                quest.setGold(amountOfSkills * 25L);
                break;
            case NORMAL:
                quest.setExperience(amountOfSkills * 50L);
                quest.setGold(amountOfSkills * 50L);
                break;
            case DIFÍCIL:
                quest.setExperience(amountOfSkills * 100L);
                quest.setGold(amountOfSkills * 100L);
                break;
        }

        return repository.save(quest);
    }
}
