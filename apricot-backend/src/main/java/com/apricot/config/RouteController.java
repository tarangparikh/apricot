package com.apricot.config;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class RouteController {
    @RequestMapping(value = {"/", "/company/**", "/dashboard/**","/login/**","/item/**","/purchase/**",
            "/party/**" , "/signUp/**" ,"/profile/**"})

    public String index() {
        return "/index.html";
    }
}
