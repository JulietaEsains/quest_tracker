package com.questtracker.questtrackerbackend.controllers;

import com.questtracker.questtrackerbackend.entities.Quest;
import com.questtracker.questtrackerbackend.services.QuestService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("quests")
public class QuestController extends com.questtracker.questtrackerbackend.controllers.GenericControllerBaseImpl<Quest, QuestService> {
    public QuestController(QuestService service) {
        super(service);
    }
}
