package com.questtracker.questtrackerbackend.controllers;

import com.questtracker.questtrackerbackend.entities.Story;
import com.questtracker.questtrackerbackend.services.StoryService;
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
