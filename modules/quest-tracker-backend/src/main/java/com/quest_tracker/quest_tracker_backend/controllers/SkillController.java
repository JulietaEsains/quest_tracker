package com.quest_tracker.quest_tracker_backend.controllers;

import com.quest_tracker.quest_tracker_backend.entities.Skill;
import com.quest_tracker.quest_tracker_backend.services.SkillService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("skills")
public class SkillController extends GenericControllerBaseImpl<Skill, SkillService> {
    public SkillController(SkillService service) {
        super(service);
    }
}
