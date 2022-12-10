package com.megahit.backend.Genre;

import com.megahit.backend.Movie.Movie;
import com.megahit.backend.Movie.MovieRepository;
import com.megahit.backend.Profile.Profile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path="/genre")
@CrossOrigin(origins = "http://localhost:3000")
public class GenreController {
    @Autowired
    private GenreRepository genreRepository;

    @GetMapping(path="")
    public @ResponseBody Iterable<String> getGenresByMovie(@RequestParam int movie_id) {
        return genreRepository.findAllByMovie_id(movie_id);
    }
}
