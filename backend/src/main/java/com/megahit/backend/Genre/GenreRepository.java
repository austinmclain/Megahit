package com.megahit.backend.Genre;

import com.megahit.backend.Movie.Movie;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface GenreRepository extends CrudRepository<Genre, Integer> {
    @Query(value = "SELECT g.keyword FROM Genre g WHERE g.movie_id = ?1")
    Iterable<String> findAllByMovie_id(int movie_id);
}
