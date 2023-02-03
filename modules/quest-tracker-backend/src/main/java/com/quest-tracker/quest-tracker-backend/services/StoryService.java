package com.questtracker.questtrackerbackend.services;

import com.questtracker.questtrackerbackend.entities.Story;
import com.questtracker.questtrackerbackend.repositories.StoryRepository;
import com.questtracker.questtrackerbackend.transactional_services.StoryTransactionalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StoryService extends GenericService<Story> implements StoryTransactionalService {
    @Autowired
    private StoryRepository repository;
}
