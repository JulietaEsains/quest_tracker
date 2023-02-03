package com.questtracker.questtrackerbackend.entities;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "rewards")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Reward extends GenericEntity {
    private String name;
    private Long price;

    @Enumerated(EnumType.STRING)
    private Difficulty difficulty;

    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JoinColumn(name = "fk_user", nullable = false)
    private User user;
}
