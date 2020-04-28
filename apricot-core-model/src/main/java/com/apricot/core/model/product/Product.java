package com.apricot.core.model.product;

import com.apricot.core.model.category.Category;
import com.apricot.core.model.company.Company;
import com.apricot.core.model.price.ProductPrice;
import com.apricot.core.model.stock.Stock;
import com.apricot.core.model.units.Unit;
import com.apricot.core.model.units.UnitConvertor;

import javax.persistence.*;

/*
    Apricot Management Suite
    Copyright (C) 2020 Tarang Parikh
    
    Email : tp0265@gmail.com
    Project Home : https://github.com/tarangparikh/apricot
    
    Original Author : @author Tarang Parikh <tp0265@gmail.com>
    
*/
@Entity
@Table
public class Product {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
    private String productName;
    private String itemCode;
    @OneToOne private Category category;
    private String hsnSacCode;
    @OneToOne private ProductPrice price;
    @OneToOne private Stock stock;
    @OneToOne private UnitConvertor convertor;
    @OneToOne private Company company;
}
