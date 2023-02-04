package com.quest_tracker.quest_tracker_backend.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "stories")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Story extends GenericEntity {
    private String name;

    private String description;

    @Column(name = "color_code")
    private String colorCode;

    private Long experience;
}
