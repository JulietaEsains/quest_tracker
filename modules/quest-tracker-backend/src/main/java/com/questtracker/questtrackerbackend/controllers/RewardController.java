package com.questtracker.questtrackerbackend.controllers;

import com.questtracker.questtrackerbackend.entities.Reward;
import com.questtracker.questtrackerbackend.services.RewardService;
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
