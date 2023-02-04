package com.quest_tracker.quest_tracker_backend.controllers;

import com.quest_tracker.quest_tracker_backend.services.StoryService;
import com.quest_tracker.quest_tracker_backend.entities.Story;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("stories")
public class StoryController extends GenericControllerBaseImpl<Story, StoryService> {
    public StoryController(StoryService service) {
        super(service);
    }
}
