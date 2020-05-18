package com.apricot.core.business.repository.purchase;
/* 
    Apricot Management Suite
    Copyright (C) 2020 Tarang Parikh
    
    Email : tp0265@gmail.com
    Project Home : https://github.com/tarangparikh/apricot
    
    Original Author : @author Tarang Parikh <tp0265@gmail.com>
    
*/

import com.apricot.core.model.purchase.Purchase;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PurchaseRepository extends JpaRepository<Purchase,Long> {
}
