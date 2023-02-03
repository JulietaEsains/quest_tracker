package com.questtracker.questtrackerbackend.services;

import com.questtracker.questtrackerbackend.entities.Skill;
import com.questtracker.questtrackerbackend.repositories.SkillRepository;
import com.questtracker.questtrackerbackend.transactional_services.SkillTransactionalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SkillService extends GenericService<Skill> implements SkillTransactionalService {
    @Autowired
    private SkillRepository repository;
}
