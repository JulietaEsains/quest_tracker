package com.quest_tracker.quest_tracker_backend.services;

import com.quest_tracker.quest_tracker_backend.entities.Reward;
import com.quest_tracker.quest_tracker_backend.repositories.RewardRepository;
import com.quest_tracker.quest_tracker_backend.transactional_services.RewardTransactionalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RewardService extends GenericService<Reward> implements RewardTransactionalService {
    @Autowired
    private RewardRepository repository;
}
