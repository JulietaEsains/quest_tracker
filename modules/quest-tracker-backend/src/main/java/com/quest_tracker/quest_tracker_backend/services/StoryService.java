package com.quest_tracker.quest_tracker_backend.services;

import com.quest_tracker.quest_tracker_backend.entities.Story;
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
}
