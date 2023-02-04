package com.quest_tracker.quest_tracker_backend.services;


import com.quest_tracker.quest_tracker_backend.entities.User;
import com.quest_tracker.quest_tracker_backend.repositories.UserRepository;
import com.quest_tracker.quest_tracker_backend.transactional_services.UserTransactionalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class UserService extends GenericService<User> implements UserTransactionalService {
    @Autowired
    private UserRepository repository;

    @Transactional
    public User save(User user) throws Exception {
        user.setLevel(1L);
        user.setCurrentExperience(0L);
        user.setExperienceForNextLevel(1000L);
        user.setGold(0L);
        return repository.save(user);
    }

    @Transactional
    public Double findLevelPercentage(Long id) throws Exception {
        var opt = this.repository.findById(id);
        User user = opt.get();
        if (opt.isPresent()) {
            Double currentLevelExperience = 0.0;
            if (user.getLevel() == 1L) {
                currentLevelExperience = Double.valueOf(user.getCurrentExperience());
            } else {
                currentLevelExperience = Double.valueOf(user.getCurrentExperience() - 1000 * user.getLevel());
            }
            return (currentLevelExperience/1000) * 100;
        } else {
            throw new Exception(String.format("%s with id %d not found in repository.", opt.getClass(), (Long) id));
        }
    }
}
