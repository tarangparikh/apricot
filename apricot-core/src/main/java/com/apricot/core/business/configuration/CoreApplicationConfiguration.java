package com.apricot.core.business.configuration;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

/*
    Apricot Management Suite
    Copyright (C) 2020 Tarang Parikh
    
    Email : tp0265@gmail.com
    Project Home : https://github.com/tarangparikh/apricot
    
    Original Author : @author Tarang Parikh <tp0265@gmail.com>
    
*/
@Configuration
@ComponentScan({"com.apricot.core.business"})
@EnableAutoConfiguration
@EnableJpaRepositories(basePackages = "com.apricot.core.business.repositories")
@EntityScan(basePackages = "com.apricot.core.model")
@EnableTransactionManagement
//@ImportResource("classpath:/spring/")
public class CoreApplicationConfiguration {

}
