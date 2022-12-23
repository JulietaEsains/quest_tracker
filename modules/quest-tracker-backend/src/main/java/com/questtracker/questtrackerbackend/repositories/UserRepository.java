package com.questtracker.questtrackerbackend.repositories;

import com.questtracker.questtrackerbackend.entities.User;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends GenericRepository<User> {
}
