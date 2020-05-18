package com.apricot.core.business.repository.user;
/* 
    Apricot Management Suite
    Copyright (C) 2020 Tarang Parikh
    
    Email : tp0265@gmail.com
    Project Home : https://github.com/tarangparikh/apricot
    
    Original Author : @author Tarang Parikh <tp0265@gmail.com>

*/


import com.apricot.core.model.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long>{
        Optional<User> findByEmail(String email);
        Boolean existsByEmail(String email);

}

