package com.questtracker.questtrackerbackend.services;

import com.questtracker.questtrackerbackend.entities.Quest;
import com.questtracker.questtrackerbackend.repositories.GenericRepository;
import com.questtracker.questtrackerbackend.repositories.QuestRepository;
import com.questtracker.questtrackerbackend.transactional_services.QuestTransactionalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuestService extends GenericService<Quest> implements QuestTransactionalService {
    @Autowired
    private QuestRepository repository;
}
