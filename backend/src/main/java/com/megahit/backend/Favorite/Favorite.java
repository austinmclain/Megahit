package com.megahit.backend.Favorite;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "favorite")
@IdClass(FavoritePK.class)
public class Favorite {
    @Id
    @Column(name = "email_address")
    private String emailAddress;
    @Id
    private String profile_name;
    @Id
    private int movie_id;
}
