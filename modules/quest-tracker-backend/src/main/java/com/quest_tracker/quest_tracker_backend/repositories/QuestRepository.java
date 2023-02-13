package com.quest_tracker.quest_tracker_backend.repositories;

import com.quest_tracker.quest_tracker_backend.entities.Quest;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestRepository extends GenericRepository<Quest> {
    @Query(value = "select * from quests where completed = false order by isnull(due_date), due_date", nativeQuery = true)
    List<Quest> findAllByPending();
    // select * from quests where completed = true
    List<Quest> findAllByCompletedTrue();
}
