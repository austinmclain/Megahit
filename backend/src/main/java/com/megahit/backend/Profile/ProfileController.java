package com.megahit.backend.Profile;

import com.megahit.backend.Profile.Profile;
import com.megahit.backend.Profile.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path="/profile")
@CrossOrigin(origins = "http://localhost:3000")
public class ProfileController {
    @Autowired
    private ProfileRepository profileRepository;

    @GetMapping(path="")
    public @ResponseBody Iterable<Profile> getAccountProfiles(@RequestParam String emailAddress) {
        return profileRepository.findAllByEmailAddress(emailAddress);
    }
}
