package com.megahit.backend.Movie;

import com.megahit.backend.Movie.Movie;
import com.megahit.backend.Movie.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@RequestMapping(path="/movie")
@CrossOrigin(origins = "http://localhost:3000")
public class MovieController {
    @Autowired
    private MovieRepository movieRepository;

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    @GetMapping(path="")
    public @ResponseBody Optional<Movie> getMovie(int id) {
        return movieRepository.findById(id);
    }
}
