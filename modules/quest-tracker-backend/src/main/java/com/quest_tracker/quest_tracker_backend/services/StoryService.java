package com.quest_tracker.quest_tracker_backend.services;

import com.quest_tracker.quest_tracker_backend.entities.Quest;
import com.quest_tracker.quest_tracker_backend.entities.Story;
import com.quest_tracker.quest_tracker_backend.entities.User;
import com.quest_tracker.quest_tracker_backend.repositories.StoryRepository;
import com.quest_tracker.quest_tracker_backend.transactional_services.StoryTransactionalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class StoryService extends GenericService<Story> implements StoryTransactionalService {
    @Autowired
    private StoryRepository repository;

    @Transactional
    public Story save(Story story) throws Exception {
        story.setExperience(0L);
        return repository.save(story);
    }

    @Transactional
    public Story completeQuest(Quest quest) throws Exception {
        var opt = repository.findById(quest.getStory().getId());
        Story story = opt.get();
        story.setExperience(story.getExperience() + quest.getExperience());
        return repository.save(story);
    }
}
