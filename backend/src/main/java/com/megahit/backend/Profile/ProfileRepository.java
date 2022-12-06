package com.megahit.backend.Profile;

import com.megahit.backend.Account.Account;
import com.megahit.backend.Profile.Profile;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface ProfileRepository extends CrudRepository<Profile, Integer> {
    @Query("SELECT p.profile_name, p.profile_picture FROM Profile p WHERE p.emailAddress = ?1")
    Iterable<Profile> findAllByEmailAddress(String emailAddress);
}
