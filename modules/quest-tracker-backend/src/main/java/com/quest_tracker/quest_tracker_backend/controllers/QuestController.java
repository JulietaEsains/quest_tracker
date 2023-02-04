package com.quest_tracker.quest_tracker_backend.controllers;

import com.quest_tracker.quest_tracker_backend.services.QuestService;
import com.quest_tracker.quest_tracker_backend.entities.Quest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("quests")
public class QuestController extends GenericControllerBaseImpl<Quest, QuestService> {
    public QuestController(QuestService service) {
        super(service);
    }

    @GetMapping("/{id}/formatted-date")
    public ResponseEntity<?> findFormattedDate(@PathVariable("id") Long id) {
        try {
            String formattedDate = this.service.findFormattedDate(id);
            return ResponseEntity.status(HttpStatus.OK).body(String.format("{\"result\":\"%s\"}", formattedDate));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(String.format("{\"error\":\"%s\"}", e.getMessage()));
        }
    }
}
