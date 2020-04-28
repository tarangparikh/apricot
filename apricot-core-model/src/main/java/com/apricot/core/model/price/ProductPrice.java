package com.apricot.core.model.price;

import com.apricot.core.model.gst.Gst;

import javax.persistence.*;

/*
    Apricot Management Suite
    Copyright (C) 2020 Tarang Parikh
    
    Email : tp0265@gmail.com
    Project Home : https://github.com/tarangparikh/apricot
    
    Original Author : @author Tarang Parikh <tp0265@gmail.com>
    
*/
@Entity
public class ProductPrice {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
    private Long salePrice;
    private Long purchasePrice;
    private Long additionalCess;
    private Integer saleTaxIncluded;
    private Integer purchaseTaxIncluded;
    @OneToOne private Gst gst;
}
