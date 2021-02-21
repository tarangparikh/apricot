package com.apricot.api.user;

import com.apricot.core.business.repository.user.UserRepository;
import com.apricot.core.model.party.Party;
import com.apricot.core.model.user.User;
import com.google.gson.Gson;
import com.zaxxer.hikari.HikariDataSource;
import org.springframework.context.ApplicationContext;
import org.springframework.web.bind.annotation.*;


import javax.sql.DataSource;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

/*
    Apricot Management Suite
    Copyright (C) 2020 Tarang Parikh
    
    Email : tp0265@gmail.com
    Project Home : https://github.com/tarangparikh/apricot
    
    Original Authors : @author Tarang Parikh <tp0265@gmail.com>
                      @author Himani Bhardwaj <himanibhardwaj501@gmail.com>
    
*/
@RestController
@RequestMapping("/api/user")
public class UserApi {
    private final UserRepository userRepository;

    private final DataSource dataSource;

    private class Result<T>{
        boolean key;
        T value;
        public Result(boolean key, T value) {
            this.key = key;
            this.value = value;
        }
    }
    public UserApi(UserRepository userRepository, DataSource applicationContext) {
        this.userRepository = userRepository;
        this.dataSource = applicationContext;
    }

    @GetMapping("/")
    public List<User> getAll(){
        return userRepository.findAll();
    }

    @GetMapping("/{user_id}")
    public User getUser(@PathVariable Long user_id) {return userRepository.findById(user_id).get();}

    @GetMapping("/contains/{email}")
    public boolean containsEmail(@PathVariable String email){
        return userRepository.existsByEmail(email);
    }
    /*
        TODO : Write the JWT Tokens Code
     */
    @PostMapping("/auth")
    public String auth(@RequestBody User requestingUser){
        System.out.println(requestingUser);
        Optional<User> optional = userRepository.findByEmail(requestingUser.getEmail());
        Gson gson = new Gson();
        return optional
                .map(user -> {
                    if(user.getPassWord().equals(requestingUser.getPassWord())){
                        return gson.toJson(new Result<>(true,user.getId()));
                    }else{
                        return gson.toJson(new Result<>(false,null));
                    }
                })
                .orElse(gson.toJson(new Result<>(false,null)));
    }

    @GetMapping("/{email}")
    public User getByEmail(@PathVariable String email){
        return userRepository.findByEmail(email).get();
    }

    @PostMapping("/post")
    public User addUser(@RequestBody User user) {
        return userRepository.save(user);
    }
//    public Long  postUser(@RequestBody User user){
//        return userRepository.save(user).getId();
//    }

//    @GetMapping("/random")
//    public Long insert(){
//        User user = new User();
//        user.setEmail("himani");
//        user.setPassWord("tarang");
//        User save = userRepository.save(user);
//        return save.getId();
//    }
//
//    @GetMapping("/bean")
//    public DataSource getByBean(String email){
//        return dataSource;
//    }
}




