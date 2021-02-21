package com.apricot.core.model.purchase;
/*
    Apricot Management Suite
    Copyright (C) 2020 Tarang Parikh

    Email : tp0265@gmail.com
    Project Home : https://github.com/tarangparikh/apricot

    Original Author : @author Tarang Parikh <tp0265@gmail.com>

*/

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table
public class Purchase {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private int id;
    private Long totalAmount;
    private Long paidAmount;
    @Enumerated(EnumType.STRING) private PurchaseType purchaseType;
    private String state;
    private String description;



}
