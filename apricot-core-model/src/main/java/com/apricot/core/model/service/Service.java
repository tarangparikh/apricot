package com.apricot.core.model.service;
/* 
    Apricot Management Suite
    Copyright (C) 2020 Tarang Parikh
    
    Email : tp0265@gmail.com
    Project Home : https://github.com/tarangparikh/apricot
    
    Original Author : @author Tarang Parikh <tp0265@gmail.com>
    
*/

import com.apricot.core.model.category.Category;
import com.apricot.core.model.company.Company;
import com.apricot.core.model.price.ServicePrice;
import com.apricot.core.model.units.UnitConvertor;

import javax.persistence.*;

@Entity
public class Service {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Long id;
    private String productName;
    private String itemCode;
    @OneToOne
    private Category category;
    private String hsnSacCode;
    @OneToOne private ServicePrice price;
    @OneToOne private UnitConvertor convertor;
    @OneToOne private Company company;
}
