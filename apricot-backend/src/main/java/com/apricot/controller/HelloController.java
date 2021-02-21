package com.apricot.controller;

import com.apricot.model.User;
import com.apricot.repository.UserRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    final UserRepository userRepository;

    public HelloController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @RequestMapping("/")
    public Iterable<User> index(){
        return userRepository.findAll();
    }
}
