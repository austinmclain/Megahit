package com.megahit.backend.Account;

import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.Optional;

@Service
public class AccountService {
    private final AccountRepository accountRepository;

    public AccountService(AccountRepository accountRepository) {this.accountRepository = accountRepository;}

    public boolean checkIfValidLogin(String emailAddress, String account_password) {
        Account account = accountRepository.findByEmailAddress(emailAddress);
        if (account == null) {
            return false;
        } else if (Objects.equals(account.getAccount_password(), account_password)) {
            return true;
        } else {
            return false;
        }
    }
}
