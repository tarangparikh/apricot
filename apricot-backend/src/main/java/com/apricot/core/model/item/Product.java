package com.apricot.core.model.item;
/* 
    Apricot Management Suite
    Copyright (C) 2020 Tarang Parikh
    
    Email : tp0265@gmail.com
    Project Home : https://github.com/tarangparikh/apricot
    
    Original Author : @author Tarang Parikh <tp0265@gmail.com>
    
*/

import com.apricot.core.model.price.ProductPrice;
import com.apricot.core.model.stock.Stock;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToOne;


@Entity
@EqualsAndHashCode(callSuper = true)
@Data
public class Product extends Item {
    @OneToOne(cascade = CascadeType.ALL,orphanRemoval = true)
    private ProductPrice productPrice;
    @OneToOne(cascade = CascadeType.ALL,orphanRemoval = true)
    private Stock stock;
}
