package com.apricot.core.business.user;
/* 
    Apricot Management Suite
    Copyright (C) 2020 Tarang Parikh
    
    Email : tp0265@gmail.com
    Project Home : https://github.com/tarangparikh/apricot
    
    Original Author : @author Tarang Parikh <tp0265@gmail.com>
    
*/

import com.apricot.core.business.configuration.CoreApplicationConfiguration;
import com.apricot.core.business.repositories.user.UserRepository;
import com.apricot.core.model.user.User;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;



@RunWith(SpringRunner.class)
@SpringBootTest(classes = CoreApplicationConfiguration.class)
public class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    public void userRepositoryTest(){
        User user = new User();
        user.setPassWord("p");
        user.setEmail("t");
        User save = userRepository.save(user);
        Assert.assertNotNull(save.getId());
    }




}
