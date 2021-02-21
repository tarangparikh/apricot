package com.apricot.core.model.sale;
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

@Data
@Entity
public class SaleOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @OneToOne
    Party party;
    @OneToOne
    Company company;
    Date saleDate;
    @OneToMany
    List<CartItem> cartItems;
    String paymentType;
    String description;
    String stateOfSupply;
    Double advanceAmount;
    @Transient
    Double totalAmount;
    @Transient
    Double balanceDue;

    @PostLoad
    public void onPostLoad() {
        loadTotalAmount();
        setBalanceDue(getTotalAmount() - getAdvanceAmount());
    }
    public void loadTotalAmount() {
        Double temp = 0.0;
        for (CartItem cartItem : cartItems) {
            temp += cartItem.getTotalAmount();
        }
        setTotalAmount(temp);
    }

}
