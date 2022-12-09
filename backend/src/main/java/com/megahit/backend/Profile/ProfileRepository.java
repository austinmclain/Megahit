package com.megahit.backend.Profile;

import com.megahit.backend.Account.Account;
import com.megahit.backend.Profile.Profile;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface ProfileRepository extends CrudRepository<Profile, Integer> {
    @Query(value = "SELECT p FROM Profile p WHERE p.emailAddress = ?1")
    Iterable<Profile> findAllByEmailAddress(String emailAddress);
    @Query(value = "SELECT p FROM Profile p WHERE p.profile_name = ?1")
    Profile findByProfileName(String name);
}
