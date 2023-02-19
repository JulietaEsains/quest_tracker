package com.quest_tracker.quest_tracker_backend.controllers;

import com.quest_tracker.quest_tracker_backend.entities.Skill;
import com.quest_tracker.quest_tracker_backend.services.SkillService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("skills")
public class SkillController extends GenericControllerBaseImpl<Skill, SkillService> {
    public SkillController(SkillService service) {
        super(service);
    }

    @GetMapping("/{id}/level-percentage")
    public ResponseEntity<?> findLevelPercentage(@PathVariable("id") Long id) {
        try {
            Double levelPercentage = this.service.findLevelPercentage(id);
            return ResponseEntity.status(HttpStatus.OK).body(String.format("{\"result\":\"%s\"}", levelPercentage));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(String.format("{\"error\":\"%s\"}", e.getMessage()));
        }
    }
}
