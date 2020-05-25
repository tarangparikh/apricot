package com.apricot.core.model.party;
/*
    Apricot Management Suite
    Copyright (C) 2020 Tarang Parikh

    Email : tp0265@gmail.com
    Project Home : https://github.com/tarangparikh/apricot

    Original Author : @author Tarang Parikh <tp0265@gmail.com>

*/

import com.apricot.core.model.company.Company;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Party {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
    private String partyName;
    private String phoneNumber;
    private String email;
    private String billingAddress;
    private String shippingAddress;
    private Long balance;
    //@Enumerated(EnumType.STRING) private PartyType partyType;
    private String gstInNumber;
    @OneToOne private Company company;
}
