package com.questtracker.questtrackerbackend.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table (name = "users")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User extends GenericEntity {
    private String name;

    private Long level;

    @Column(name = "current_experience")
    private Long currentExperience;

    @Column(name = "experience_for_next_level")
    private Long experienceForNextLevel;

    private Long gold;
}
