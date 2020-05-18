package com.apricot.core.model.item;

import com.apricot.core.model.item.Item;
import com.apricot.core.model.price.ProductPrice;
import com.apricot.core.model.stock.Stock;

import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.Table;

/*
    Apricot Management Suite
    Copyright (C) 2020 Tarang Parikh
    
    Email : tp0265@gmail.com
    Project Home : https://github.com/tarangparikh/apricot
    
    Original Author : @author Tarang Parikh <tp0265@gmail.com>
    
*/

@Entity
@Table
public class Product extends Item {
    @OneToOne private ProductPrice productPrice;
    @OneToOne private Stock stock;
}
