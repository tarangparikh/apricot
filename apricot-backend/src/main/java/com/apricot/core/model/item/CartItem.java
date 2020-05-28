package com.apricot.core.model.item;
/* 
    Apricot Management Suite
    Copyright (C) 2020 Tarang Parikh
    
    Email : tp0265@gmail.com
    Project Home : https://github.com/tarangparikh/apricot
    
    Original Author : @author Tarang Parikh <tp0265@gmail.com>
    
*/

import com.apricot.core.model.gst.Gst;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class CartItem {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Long id;
    @OneToOne Item item;
    Integer quantity;
    Integer freeQuantity;
    Double rate;
    Integer taxIncluded;
    Double discountRate;
    @OneToOne(cascade = CascadeType.ALL) Gst gst;
    Double additionalCess;
    @Transient Double subTotal;
    @Transient Double totalAmount;
    @Transient Double discountAmount;
    @Transient Double tax;

    @PostLoad
    public void doPostLoad(){
        this.subTotal = this.quantity * this.rate;
        this.discountAmount = this.subTotal * this.discountRate / 100;
        this.tax = this.taxIncluded == 0 ? this.subTotal * this.gst.getGstRate() / 100 : 0.0;
        this.totalAmount = this.subTotal - this.discountAmount + this.tax;
    }
}
