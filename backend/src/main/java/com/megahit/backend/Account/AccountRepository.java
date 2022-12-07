package com.megahit.backend.Account;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.megahit.backend.Account.Account;

import java.util.Optional;

// This will be AUTO IMPLEMENTED by Spring into a Bean called accountRepository
// CRUD refers Create, Read, Update, Delete

public interface AccountRepository extends CrudRepository<Account, Integer> {
    Account findByEmailAddress(String emailAddress);
}
