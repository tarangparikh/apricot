package com.apricot.api;

import com.apricot.core.business.repository.user.UserRepository;
import com.apricot.core.model.user.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/*
    Apricot Management Suite
    Copyright (C) 2020 Tarang Parikh
    
    Email : tp0265@gmail.com
    Project Home : https://github.com/tarangparikh/apricot
    
    Original Author : @author Tarang Parikh <tp0265@gmail.com>
    
*/
@RestController
@RequestMapping("/api/user")
public class UserApi {
    private final UserRepository userRepository;

    public UserApi(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/all")
    public List<User> getAll(){
        return userRepository.findAll();
    }

    @GetMapping("/random")
    public Integer insert(){
        User user = new User();
        user.setEmail("himani");
        user.setPassWord("tarang");
        User save = userRepository.save(user);
        return save.getId();
    }

    @GetMapping("/{email}")
    public User getByEmail(String email){
        return userRepository.findByEmail(email);
    }
}




