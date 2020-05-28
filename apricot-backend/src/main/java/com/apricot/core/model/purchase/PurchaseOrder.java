package com.apricot.core.model.purchase;
/* 
    Apricot Management Suite
    Copyright (C) 2020 Tarang Parikh
    
    Email : tp0265@gmail.com
    Project Home : https://github.com/tarangparikh/apricot
    
    Original Author : @author Tarang Parikh <tp0265@gmail.com>
    
*/

import com.apricot.core.model.company.Company;
import com.apricot.core.model.item.CartItem;
import com.apricot.core.model.party.Party;
import lombok.Data;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Entity
@Data
public class PurchaseOrder {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) Long id;
    @OneToOne Party party;
    @OneToOne Company company;
    Date purchaseOrderDate;
    String purchaseOrderNumber;
    @OneToMany(cascade = CascadeType.ALL) List<CartItem> cartItems;
    String paymentType;
    String description;
    String stateOfPurchase;
    Double receivedAmount;
    @Transient Double totalAmount;
    @Transient Double balanceDue;


    @PostLoad
    public void doPostLoad(){
       loadTotalAmount();
       setBalanceDue(getTotalAmount() - getReceivedAmount());
    }
    public void loadTotalAmount(){
        Double temp = 0.0;
        for(CartItem cartItem : cartItems){
            temp += cartItem.getTotalAmount();
        }
        setTotalAmount(temp);
    }
}
