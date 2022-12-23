package com.questtracker.questtrackerbackend.repositories;

import com.questtracker.questtrackerbackend.entities.Quest;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestRepository extends GenericRepository<Quest> {
}
