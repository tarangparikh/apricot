package com.apricot.core.model.Item.service;
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
import com.apricot.core.model.Item.Item;
import com.apricot.core.model.units.UnitConvertor;
import lombok.Data;

import javax.persistence.*;


@Entity
public class Service extends Item {
    @OneToOne private ServicePrice servicePrice;

}
