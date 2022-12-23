package com.questtracker.questtrackerbackend.controllers;

import com.questtracker.questtrackerbackend.entities.GenericEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

public interface GenericController<E extends GenericEntity> {
    public ResponseEntity<?> findAll() throws Exception;
    public ResponseEntity<?> delete(@PathVariable Long id) throws Exception;
    public ResponseEntity<?> find(@PathVariable Long id) throws Exception;
    public ResponseEntity<?> save(@RequestBody E entity) throws Exception;
}
