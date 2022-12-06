package com.megahit.backend.Profile;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "user_profile")
@IdClass(ProfilePK.class)
public class Profile {
    @Id
    @Column(name = "email_address")
    private String emailAddress;
    @Id
    private String profile_name;
    private Integer profile_picture;
}
