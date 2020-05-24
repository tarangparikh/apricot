package com.apricot.core.model.category;

import com.apricot.core.model.company.Company;
import lombok.Data;

import javax.persistence.*;

/*
    Apricot Management Suite
    Copyright (C) 2020 Tarang Parikh

    Email : tp0265@gmail.com
    Project Home : https://github.com/tarangparikh/apricot

    Original Author : @author Tarang Parikh <tp0265@gmail.com>

*/
@Entity
@Data
public class Category {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
    private String categoryName;
    @OneToOne private Company company;
}
