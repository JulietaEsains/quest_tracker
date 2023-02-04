package com.quest_tracker.quest_tracker_backend.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "skills")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Skill extends GenericEntity {
    private String name;

    private Long level;

    @Column(name = "color_code")
    private String colorCode;

    private Long experience;
}
