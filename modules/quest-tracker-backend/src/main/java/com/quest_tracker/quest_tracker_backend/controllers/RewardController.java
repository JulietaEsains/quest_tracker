package com.quest_tracker.quest_tracker_backend.controllers;

import com.quest_tracker.quest_tracker_backend.entities.Reward;
import com.quest_tracker.quest_tracker_backend.services.RewardService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("rewards")
public class RewardController extends GenericControllerBaseImpl<Reward, RewardService> {
    public RewardController(RewardService service) {
        super(service);
    }
}
