package com.quest_tracker.quest_tracker_backend.services;

import com.quest_tracker.quest_tracker_backend.entities.Quest;
import com.quest_tracker.quest_tracker_backend.entities.Skill;
import com.quest_tracker.quest_tracker_backend.entities.Story;
import com.quest_tracker.quest_tracker_backend.entities.User;
import com.quest_tracker.quest_tracker_backend.repositories.QuestRepository;
import com.quest_tracker.quest_tracker_backend.transactional_services.QuestTransactionalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.format.DateTimeFormatter;
import java.time.format.FormatStyle;
import java.util.List;

@Service
public class QuestService extends GenericService<Quest> implements QuestTransactionalService {
    @Autowired
    private QuestRepository repository;

    @Autowired
    private UserService userService;

    @Autowired
    private StoryService storyService;

    @Autowired
    private SkillService skillService;

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

    @Transactional
    public String findFormattedDate(Long id) throws Exception {
        var opt = repository.findById(id);
        Quest quest = opt.get();
        return quest.getDueDate().format(DateTimeFormatter.ofLocalizedDate(FormatStyle.SHORT));
    }

    @Transactional
    public List<Quest> findAllPending() throws Exception {
        return repository.findAllByCompletedFalse();
    }

    @Transactional
    public List<Quest> findAllCompleted() throws Exception {
        return repository.findAllByCompletedTrue();
    }

    @Transactional
    public Quest complete(Long id) throws Exception {
        var opt = repository.findById(id);
        Quest quest = opt.get();

        quest.setCompleted(true);

        User updatedUser = userService.completeQuest(quest);
        quest.setUser(updatedUser);

        Story updatedStory = storyService.completeQuest(quest);
        quest.setStory(updatedStory);

        List<Skill> updatedSkills = skillService.completeQuest(quest);
        quest.setSkills(updatedSkills);

        return repository.save(quest);
    }
}
