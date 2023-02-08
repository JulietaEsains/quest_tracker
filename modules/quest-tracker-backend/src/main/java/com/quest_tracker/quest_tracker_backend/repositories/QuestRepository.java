package com.quest_tracker.quest_tracker_backend.repositories;

import com.quest_tracker.quest_tracker_backend.entities.Quest;
import org.springframework.stereotype.Repository;

import javax.management.QueryEval;
import java.util.List;

@Repository
public interface QuestRepository extends GenericRepository<Quest> {
    List<Quest> findAllByCompletedFalse();
    List<Quest> findAllByCompletedTrue();
}
