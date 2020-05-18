package com.apricot.core.model.item;
/* 
    Apricot Management Suite
    Copyright (C) 2020 Tarang Parikh
    
    Email : tp0265@gmail.com
    Project Home : https://github.com/tarangparikh/apricot
    
    Original Author : @author Tarang Parikh <tp0265@gmail.com>
    
*/

import com.apricot.core.model.category.Category;
import com.apricot.core.model.company.Company;
import com.apricot.core.model.units.UnitConvertor;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Inheritance
public class Item {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
    private String productName;
    private String itemCode;
    private String hsnSacCode;
    @OneToOne private Category category;
    @OneToOne private UnitConvertor convertor;
    @OneToOne private Company company;
}
