package com.questtracker.questtrackerbackend.controllers;

import com.questtracker.questtrackerbackend.entities.Skill;
import com.questtracker.questtrackerbackend.services.SkillService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("skills")
public class SkillController extends com.questtracker.questtrackerbackend.controllers.GenericControllerBaseImpl<Skill, SkillService> {
    public SkillController(SkillService service) {
        super(service);
    }
}
