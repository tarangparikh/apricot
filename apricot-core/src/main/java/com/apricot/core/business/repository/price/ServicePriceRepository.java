package com.apricot.core.business.repository.price;
/* 
    Apricot Management Suite
    Copyright (C) 2020 Tarang Parikh
    
    Email : tp0265@gmail.com
    Project Home : https://github.com/tarangparikh/apricot
    
    Original Author : @author Tarang Parikh <tp0265@gmail.com>
    
*/

import com.apricot.core.model.price.ServicePrice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServicePriceRepository extends JpaRepository<ServicePrice,Long> {
}
