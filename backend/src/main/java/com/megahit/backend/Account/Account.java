package com.megahit.backend.Account;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import java.math.*;

@Entity
@Table(name = "user_account")
public class Account {
    @Id
    @Getter @Setter private String email_address;
    @Getter @Setter private String account_password;
    @Getter @Setter private BigInteger card_number;
}
