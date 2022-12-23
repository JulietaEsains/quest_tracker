package com.questtracker.questtrackerbackend.repositories;

import com.questtracker.questtrackerbackend.entities.GenericEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface GenericRepository<E extends GenericEntity> extends JpaRepository<E, Long> {
}
