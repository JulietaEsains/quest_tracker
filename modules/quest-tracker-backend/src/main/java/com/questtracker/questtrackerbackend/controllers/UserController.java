package com.questtracker.questtrackerbackend.controllers;

import com.questtracker.questtrackerbackend.entities.User;
import com.questtracker.questtrackerbackend.services.UserService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("users")
public class UserController extends GenericControllerBaseImpl<User, UserService> {
    public UserController(UserService service) {
        super(service);
    }
}
