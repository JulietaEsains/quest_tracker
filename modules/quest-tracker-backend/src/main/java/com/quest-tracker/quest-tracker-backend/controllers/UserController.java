package com.questtracker.questtrackerbackend.controllers;

import com.questtracker.questtrackerbackend.entities.User;
import com.questtracker.questtrackerbackend.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("users")
public class UserController extends com.questtracker.questtrackerbackend.controllers.GenericControllerBaseImpl<User, UserService> {

    public UserController(UserService service) {
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
