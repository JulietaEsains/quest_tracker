package com.questtracker.questtrackerbackend.services;

import com.questtracker.questtrackerbackend.entities.Quest;
import com.questtracker.questtrackerbackend.repositories.QuestRepository;
import com.questtracker.questtrackerbackend.transactional_services.QuestTransactionalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuestService extends com.questtracker.questtrackerbackend.services.GenericService<Quest> implements QuestTransactionalService {
    @Autowired
    private QuestRepository repository;
}
