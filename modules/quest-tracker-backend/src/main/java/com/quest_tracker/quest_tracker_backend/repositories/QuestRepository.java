package com.quest_tracker.quest_tracker_backend.repositories;

import com.quest_tracker.quest_tracker_backend.entities.Quest;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestRepository extends GenericRepository<Quest> {
}
