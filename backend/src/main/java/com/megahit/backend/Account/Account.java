package com.megahit.backend.Account;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

import java.math.*;

@Entity
@Data
@Table(name = "user_account")
public class Account {
    @Id
    @Column(name = "email_address")
    private String emailAddress;
    private String account_password;
    private BigInteger card_number;
}
