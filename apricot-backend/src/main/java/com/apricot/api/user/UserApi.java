package com.apricot.api.user;

import com.apricot.core.business.repository.user.UserRepository;
import com.apricot.core.model.user.User;
import com.zaxxer.hikari.HikariDataSource;
import org.springframework.context.ApplicationContext;
import org.springframework.web.bind.annotation.*;


import javax.sql.DataSource;
import java.util.List;
import java.util.Optional;

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

    private final DataSource dataSource;

    public UserApi(UserRepository userRepository, DataSource applicationContext) {
        this.userRepository = userRepository;
        this.dataSource = applicationContext;
    }

    @GetMapping("/")
    public List<User> getAll(){
        return userRepository.findAll();
    }

    @GetMapping("/contains/{email}")
    public boolean containsEmail(@PathVariable String email){
        return userRepository.existsByEmail(email);
    }

    /*
        TODO : Write the JWT Tokens Code
     */
    @PostMapping("/auth")
    public boolean auth(@RequestBody User requestingUser){
        Optional<User> optional = userRepository.findByEmail(requestingUser.getEmail());
        return optional
                .map(user -> (user.getPassWord().equals(requestingUser.getPassWord())))
                .orElse(false);
    }

    @GetMapping("/{email}")
    public Optional<User> getByEmail(@PathVariable String email){
        return userRepository.findByEmail(email);
    }

    @PostMapping("/post")
    public Integer  postUser(@RequestBody User user){
        return userRepository.save(user).getId();
    }

    @GetMapping("/random")
    public Integer insert(){
        User user = new User();
        user.setEmail("himani");
        user.setPassWord("tarang");
        User save = userRepository.save(user);
        return save.getId();
    }

    @GetMapping("/bean")
    public DataSource getByBean(String email){
        return dataSource;
    }
}




