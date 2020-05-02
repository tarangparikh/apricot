package com.apricot.core.business.repository.product;
/* 
    Apricot Management Suite
    Copyright (C) 2020 Tarang Parikh
    
    Email : tp0265@gmail.com
    Project Home : https://github.com/tarangparikh/apricot
    
    Original Author : @author Tarang Parikh <tp0265@gmail.com>
    
*/

import org.springframework.data.jpa.repository.JpaRepository;

public interface Product extends JpaRepository<Product,Long> {
}
