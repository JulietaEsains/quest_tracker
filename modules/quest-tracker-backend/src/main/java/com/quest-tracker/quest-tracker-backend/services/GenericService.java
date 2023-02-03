package com.questtracker.questtrackerbackend.services;

import com.questtracker.questtrackerbackend.entities.GenericEntity;
import com.questtracker.questtrackerbackend.repositories.GenericRepository;
import com.questtracker.questtrackerbackend.transactional_services.GenericTransactionalService;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public abstract class GenericService<E extends GenericEntity> implements GenericTransactionalService<E, Long> {
    @Autowired
    private GenericRepository<E> repository;

    @Transactional
    public List<E> findAll() throws Exception {
        return repository.findAll();
    }

    @Transactional
    public E findById(Long id) throws Exception {
        var opt = this.repository.findById(id);
        return opt.get();
    }

    @Transactional
    public E save(E entity) throws Exception {
        return repository.save(entity);
    }

    @Transactional
    public E update(Long id, E entity) throws Exception {
        entity.setId(id);
        return repository.save(entity);
    }

    @Transactional
    public void deleteById(Long id) throws Exception {
        var opt = this.repository.findById(id);
        if (opt.isPresent()) {
            repository.delete(opt.get());
        } else {
            throw new Exception(String.format("%s with id %d not found in repository.", opt.getClass(), (Long) id));
        }
    }
}
