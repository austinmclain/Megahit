package com.megahit.backend.Favorite;

import com.megahit.backend.Account.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path="/favorite")
@CrossOrigin(origins = "http://localhost:3000")
public class FavoriteController {
    @Autowired
    private FavoriteRepository favoriteRepository;

    private FavoriteService favoriteService;

    public FavoriteController(FavoriteService favoriteService) {this.favoriteService = favoriteService;}

    @PostMapping(path="")
    public @ResponseBody boolean isFavorite(@RequestBody Favorite favorite) {
        return favoriteService.isFavorite(favorite);
    }

    @PostMapping(path="/new")
    @ResponseStatus(HttpStatus.CREATED)
    public void favorite(@RequestBody Favorite favorite) {
        favoriteRepository.save(favorite);
    }

//    @DeleteMapping
//    @ResponseStatus(HttpStatus.ACCEPTED)
//    public void unfavorite(@RequestBody Favorite favorite) {
//        favoriteRepository.delete(favorite);
//    }
}
