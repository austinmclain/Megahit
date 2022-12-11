package com.megahit.backend.Favorite;

import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.Optional;

@Service
public class FavoriteService {
    private final FavoriteRepository favoriteRepository;

    public FavoriteService(FavoriteRepository favoriteRepository) {this.favoriteRepository = favoriteRepository;}

    public boolean isFavorite(Favorite favorite) {
        Iterable<Favorite> favorites = favoriteRepository.findAll();
        for (Favorite fav : favorites) {
            if (favorite.getEmailAddress().equals(fav.getEmailAddress()) &&
                favorite.getProfile_name().equals(fav.getProfile_name()) &&
                favorite.getMovie_id() == fav.getMovie_id())       {
                return true;
            }
        }
        return false;
    }
}
