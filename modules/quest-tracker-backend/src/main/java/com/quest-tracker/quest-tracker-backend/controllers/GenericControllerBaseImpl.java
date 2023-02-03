package com.questtracker.questtrackerbackend.controllers;

import com.questtracker.questtrackerbackend.entities.GenericEntity;
import com.questtracker.questtrackerbackend.services.GenericService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public abstract class GenericControllerBaseImpl<E extends GenericEntity, S extends GenericService<E>> implements com.questtracker.questtrackerbackend.controllers.GenericController<E> {

    protected S service;

    public GenericControllerBaseImpl(S service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<E>> findAll() {
        try {
            var entities = service.findAll();
            if (entities.isEmpty()) return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
            return new ResponseEntity<>(entities, HttpStatus.OK);
        } catch (Exception ex) {
            System.err.println(ex.getMessage());
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteById(@PathVariable("id") Long id) {
        try {
            service.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception ex) {
            System.err.println(ex.getMessage());
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<E> findById(@PathVariable("id") Long id) {
        try {
            var opt = service.findById(id);
            if (opt == null) return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
            return new ResponseEntity<>(opt, HttpStatus.OK);
        } catch (Exception ex) {
            System.err.println(ex.getMessage());
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping
    public ResponseEntity<E> save(@RequestBody E entity) {
        try {
            service.save(entity);
            return new ResponseEntity<>(entity, HttpStatus.CREATED);
        } catch (Exception ex) {
            System.err.println(ex.getMessage());
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<E> update(@PathVariable("id") Long id, @RequestBody E entity) throws Exception {
        var entityData = service.findById(id);
        return (entityData != null) ? new ResponseEntity<>(service.update(id, entity), HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
