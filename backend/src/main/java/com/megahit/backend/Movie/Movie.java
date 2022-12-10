package com.megahit.backend.Movie;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "movie")
public class Movie {
    @Id
    private int movie_id;
    private String movie_title;
    private int movie_year;
    private int movie_runtime;
    private String pg_rating;
}
