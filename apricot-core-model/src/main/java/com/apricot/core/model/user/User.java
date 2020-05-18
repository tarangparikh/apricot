package com.apricot.core.model.user;
/*
    Apricot Management Suite
    Copyright (C) 2020 Tarang Parikh

    Email : tp0265@gmail.com
    Project Home : https://github.com/tarangparikh/apricot

    Original Author : @author Tarang Parikh <tp0265@gmail.com>

*/

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table
public class User {
    private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) @Column Integer id;
    private @Column(unique = true) String email;
    private String passWord;
}
