package com.quest_tracker.quest_tracker_backend.repositories;

import com.quest_tracker.quest_tracker_backend.entities.User;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends GenericRepository<User> {
}
