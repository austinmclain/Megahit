package com.megahit.backend.Profile;

import org.springframework.stereotype.Service;

@Service
public class ProfileService {
    private final ProfileRepository profileRepository;

    public ProfileService(ProfileRepository profileRepository) {this.profileRepository = profileRepository;}

    public void addNewProfile(Profile profile) {
        if (profileRepository.findByProfileName(profile.getProfile_name()) == null) {
            profileRepository.save(profile);
        } else {
            throw new IllegalStateException("Your account already has a profile with that name.");
        }
    }
}
