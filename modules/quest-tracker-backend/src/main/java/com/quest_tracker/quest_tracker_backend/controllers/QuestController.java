package com.quest_tracker.quest_tracker_backend.controllers;

import com.quest_tracker.quest_tracker_backend.services.QuestService;
import com.quest_tracker.quest_tracker_backend.entities.Quest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/pending")
    public ResponseEntity<List<Quest>> findAllPending() {
        try {
            var quests = service.findAllPending();
            if (quests.isEmpty()) return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
            return new ResponseEntity<>(quests, HttpStatus.OK);
        } catch (Exception ex) {
            System.err.println(ex.getMessage());
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/completed")
    public ResponseEntity<List<Quest>> findAllCompleted() {
        try {
            var quests = service.findAllCompleted();
            if (quests.isEmpty()) return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
            return new ResponseEntity<>(quests, HttpStatus.OK);
        } catch (Exception ex) {
            System.err.println(ex.getMessage());
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/{id}/complete")
    public ResponseEntity<Quest> complete(@PathVariable("id") Long id) throws Exception {
        var questData = service.findById(id);
        return (questData != null) ? new ResponseEntity<>(service.complete(id), HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
