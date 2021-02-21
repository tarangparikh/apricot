package com.apricot.core.business.repository.party;
/* 
    Apricot Management Suite
    Copyright (C) 2020 Tarang Parikh
    
    Email : tp0265@gmail.com
    Project Home : https://github.com/tarangparikh/apricot
    
    Original Author : @author Tarang Parikh <tp0265@gmail.com>
    
*/

import com.apricot.core.model.party.Party;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PartyRepository extends JpaRepository<Party,Long> {
    List<Party> findAllByCompany_Id(Long id);
}
