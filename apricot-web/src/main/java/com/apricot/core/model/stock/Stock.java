package com.apricot.core.model.stock;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/*
    Apricot Management Suite
    Copyright (C) 2020 Tarang Parikh
    
    Email : tp0265@gmail.com
    Project Home : https://github.com/tarangparikh/apricot
    
    Original Author : @author Tarang Parikh <tp0265@gmail.com>
    
*/
@Entity
public class Stock {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
    private Long quantity;
    private Long minimumQuntity;
    private Long value;
    private String location;
}
