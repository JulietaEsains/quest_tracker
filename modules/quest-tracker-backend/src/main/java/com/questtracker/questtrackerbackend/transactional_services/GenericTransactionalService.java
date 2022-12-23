package com.questtracker.questtrackerbackend.transactional_services;

import com.questtracker.questtrackerbackend.entities.GenericEntity;

import java.io.Serializable;
import java.util.List;

public interface GenericTransactionalService<E extends GenericEntity, ID extends Serializable> {
    List<E> findAll() throws Exception;
    E findById(ID id) throws Exception;
    void save(E e) throws Exception;
    void update(ID id, E e) throws Exception;
    void delete(ID id) throws Exception;
}
