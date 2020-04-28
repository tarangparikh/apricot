package com.apricot.configuration;
/* 
    Apricot Management Suite
    Copyright (C) 2020 Tarang Parikh
    
    Email : tp0265@gmail.com
    Project Home : https://github.com/tarangparikh/apricot
    
    Original Author : @author Tarang Parikh <tp0265@gmail.com>
    
*/


import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@ComponentScan({"com.apricot.core.business","com.apricot.api"})
@EnableAutoConfiguration
@EnableJpaRepositories(basePackages = "com.apricot.core.business.repository")
@EntityScan(basePackages = "com.apricot.core.model")
public class ConfigurationTest {
}
