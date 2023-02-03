package com.questtracker.questtrackerbackend.services;

import com.questtracker.questtrackerbackend.entities.Reward;
import com.questtracker.questtrackerbackend.repositories.RewardRepository;
import com.questtracker.questtrackerbackend.transactional_services.RewardTransactionalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RewardService extends GenericService<Reward> implements RewardTransactionalService {
    @Autowired
    private RewardRepository repository;
}
