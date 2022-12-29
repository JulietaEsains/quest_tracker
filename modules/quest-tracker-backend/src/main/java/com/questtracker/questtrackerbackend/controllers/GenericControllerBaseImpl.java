package com.questtracker.questtrackerbackend.controllers;

import com.questtracker.questtrackerbackend.entities.GenericEntity;
import com.questtracker.questtrackerbackend.services.GenericService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

public abstract class GenericControllerBaseImpl<E extends GenericEntity, S extends GenericService<E>> implements GenericController<E>{

    protected S service;

    public GenericControllerBaseImpl(S service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<?> findAll() {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(this.service.findAll());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(String.format("{\"error\":\"%s\"}", e.getMessage()));
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id) {
        try {
            this.service.delete(id);
            return ResponseEntity.status(HttpStatus.OK).body(String.format("{\"result\":\"%s\"}", "entity deleted."));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(String.format("{\"error\":\"%s\"}", e.getMessage()));
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> find(@PathVariable("id") Long id) {
        try {
            var opt = this.service.findById(id);
            return ResponseEntity.status(HttpStatus.OK).body(opt);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(String.format("{\"error\":\"%s\"}", e.getMessage()));
        }
    }

    @PostMapping
    public ResponseEntity<?> save(@RequestBody E entity) {
        try {
            this.service.save(entity);
            return ResponseEntity.status(HttpStatus.OK).body(String.format("{\"result\":\"%s\"}", "entity saved."));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(String.format("{\"error\":\"%s\"}", e.getMessage()));
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable("id") Long id, @RequestBody E entity) {
        try {
            this.service.update(id, entity);
            return ResponseEntity.status(HttpStatus.OK).body(String.format("{\"result\":\"%s\"}", "entity updated."));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(String.format("{\"error\":\"%s\"}", e.getMessage()));
        }
    }
}
