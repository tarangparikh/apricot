package com.apricot.core.business.repository.gst;
/* 
    Apricot Management Suite
    Copyright (C) 2020 Tarang Parikh
    
    Email : tp0265@gmail.com
    Project Home : https://github.com/tarangparikh/apricot
    
    Original Author : @author Tarang Parikh <tp0265@gmail.com>
    
*/

import com.apricot.core.model.gst.Gst;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GstRepository extends JpaRepository<Gst,Long> {

}
