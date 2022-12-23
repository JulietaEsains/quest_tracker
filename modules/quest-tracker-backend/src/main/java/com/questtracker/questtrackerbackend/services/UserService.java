package com.questtracker.questtrackerbackend.services;

import com.questtracker.questtrackerbackend.entities.User;
import com.questtracker.questtrackerbackend.repositories.UserRepository;
import com.questtracker.questtrackerbackend.transactional_services.UserTransactionalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService extends GenericService<User> implements UserTransactionalService {
    @Autowired
    private UserRepository repository;
}
