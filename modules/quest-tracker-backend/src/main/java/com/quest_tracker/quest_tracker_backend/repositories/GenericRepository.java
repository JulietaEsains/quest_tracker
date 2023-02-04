package com.quest_tracker.quest_tracker_backend.repositories;

import com.quest_tracker.quest_tracker_backend.entities.GenericEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface GenericRepository<E extends GenericEntity> extends JpaRepository<E, Long> {
}
