package com.apricot.core.model.company;
/*
    Apricot Management Suite
    Copyright (C) 2020 Tarang Parikh

    Email : tp0265@gmail.com
    Project Home : https://github.com/tarangparikh/apricot

    Original Author : @author Tarang Parikh <tp0265@gmail.com>

*/

import com.apricot.core.model.user.User;
import javax.persistence.*;

@Entity
@Table
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String businessName;
    private String contactNumber;
    private String gstInNumber;
    private String email;
    private String address;
    private String state;
    private String bankName;
    private String accountNumber;
    private String ifscCode;
    @OneToOne private User user;

    public Company() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBusinessName() {
        return businessName;
    }

    public void setBusinessName(String businessName) {
        this.businessName = businessName;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getGstInNumber() {
        return gstInNumber;
    }

    public void setGstInNumber(String gstInNumber) {
        this.gstInNumber = gstInNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getBankName() {
        return bankName;
    }

    public void setBankName(String bankName) {
        this.bankName = bankName;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public String getIfscCode() {
        return ifscCode;
    }

    public void setIfscCode(String ifscCode) {
        this.ifscCode = ifscCode;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
