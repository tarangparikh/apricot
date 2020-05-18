package com.apricot.core.model.Item.product;

import com.apricot.core.model.Item.Item;
import com.apricot.core.model.category.Category;
import com.apricot.core.model.company.Company;
import com.apricot.core.model.price.ProductPrice;
import com.apricot.core.model.stock.Stock;
import com.apricot.core.model.units.Unit;
import com.apricot.core.model.units.UnitConvertor;
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
@Table
public class Product extends Item {
    @OneToOne private ProductPrice productPrice;
    @OneToOne private Stock stock;
}
