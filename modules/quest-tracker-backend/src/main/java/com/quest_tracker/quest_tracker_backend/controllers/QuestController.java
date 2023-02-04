package com.quest_tracker.quest_tracker_backend.controllers;

import com.quest_tracker.quest_tracker_backend.services.QuestService;
import com.quest_tracker.quest_tracker_backend.entities.Quest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("quests")
public class QuestController extends GenericControllerBaseImpl<Quest, QuestService> {
    public QuestController(QuestService service) {
        super(service);
    }
}
