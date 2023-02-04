package com.quest_tracker.quest_tracker_backend.transactional_services;

import com.quest_tracker.quest_tracker_backend.entities.GenericEntity;

import java.io.Serializable;
import java.util.List;

public interface GenericTransactionalService<E extends GenericEntity, ID extends Serializable> {
    List<E> findAll() throws Exception;
    E findById(ID id) throws Exception;
    E save(E e) throws Exception;
    E update(ID id, E e) throws Exception;
    void deleteById(ID id) throws Exception;
}
