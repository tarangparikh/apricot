package com.apricot;
/* 
    Apricot Management Suite
    Copyright (C) 2020 Tarang Parikh
    
    Email : tp0265@gmail.com
    Project Home : https://github.com/tarangparikh/apricot
    
    Original Author : @author Tarang Parikh <tp0265@gmail.com>
    
*/

import com.apricot.core.business.repository.company.CompanyRepository;
import com.apricot.core.business.repository.user.UserRepository;
import com.apricot.core.model.company.Company;
import com.apricot.core.model.user.User;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//@SpringBootApplication
public class Cli  implements CommandLineRunner {

    final UserRepository userRepository;
    final CompanyRepository companyRepository;

    public Cli(UserRepository userRepository,
               CompanyRepository companyRepository) {
        this.userRepository = userRepository;
        this.companyRepository = companyRepository;
    }

    public static void main(String...args){
        SpringApplication.run(Cli.class,args);
    }

    @Override
    public void run(String... args) throws Exception {
        User user = new User();
        user.setEmail("tp0265@gmail.com");
        user.setPassWord("password");
        userRepository.save(user);
        Company company = new Company();
        company.setAccountNumber("1452566985");
        company.setAddress("sdfjoijsefj");
        company.setBankName("State Bank of India");
        company.setBusinessName("Srinath kunj");
        company.setContactNumber("+919662466860");
        company.setEmail("tp0265@gmail.com");
        company.setGstInNumber("GST14587995");
        company.setIfscCode("SBIN478596321");
        company.setState("Gujarat");
        company.setUser(user);
        companyRepository.save(company);
    }
}
