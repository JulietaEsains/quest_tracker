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
public class Quest extends GenericEntity {
    private String goal;

    private String description;

    @Enumerated(EnumType.STRING)
    private Difficulty difficulty;

    @DateTimeFormat(pattern = "dd/MM/yyyy")
    @Column(name = "due_date")
    private LocalDate dueDate;

    private boolean completed;

    private Long experience;

    private Long gold;

    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JoinColumn(name = "fk_user", nullable = false)
    private User user;

    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JoinColumn(name = "fk_story", nullable = false)
    private Story story;

    @ManyToMany(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JoinTable(
            name = "quests_and_skills",
            joinColumns = @JoinColumn(name = "quest_id"),
            inverseJoinColumns = @JoinColumn(name = "skill_id")
    )
    private List<Skill> skills = new ArrayList<Skill>();
}
