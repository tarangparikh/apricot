package com.apricot.core.model.company;
/*
    Apricot Management Suite
    Copyright (C) 2020 Tarang Parikh

    Email : tp0265@gmail.com
    Project Home : https://github.com/tarangparikh/apricot

    Original Author : @author Tarang Parikh <tp0265@gmail.com>

*/

import com.apricot.core.model.user.User;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String businessName;
    private String contactNumber;
    private String gstInNumber;
    private String email;
    private String address;
    private String state;
    private String bankName;
    private String accountNumber;
    private String ifscCode;
    @OneToOne private User user;
}
