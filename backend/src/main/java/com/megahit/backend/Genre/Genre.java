package com.megahit.backend.Genre;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "genre")
@IdClass(GenrePK.class)
public class Genre {
    @Id
    private int movie_id;
    @Id
    private String keyword;
}
