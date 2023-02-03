package com.questtracker.questtrackerbackend.entities;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "quests")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Quest extends com.questtracker.questtrackerbackend.entities.GenericEntity {
    private String goal;

    private String description;

    @Enumerated(EnumType.STRING)
    private com.questtracker.questtrackerbackend.entities.Difficulty difficulty;

    @DateTimeFormat(pattern = "dd/MM/yyyy")
    @Column(name = "due_date")
    private LocalDate dueDate;

    private boolean completed;

    private Long experience;

    private Long gold;

    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JoinColumn(name = "fk_user", nullable = false)
    private com.questtracker.questtrackerbackend.entities.User user;

    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JoinColumn(name = "fk_story", nullable = false)
    private com.questtracker.questtrackerbackend.entities.Story story;

    @ManyToMany(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JoinTable(
            name = "quests_and_skills",
            joinColumns = @JoinColumn(name = "quest_id"),
            inverseJoinColumns = @JoinColumn(name = "skill_id")
    )
    private List<com.questtracker.questtrackerbackend.entities.Skill> skills = new ArrayList<com.questtracker.questtrackerbackend.entities.Skill>();
}
