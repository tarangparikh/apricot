package com.apricot.api.company;
/* 
    Apricot Management Suite
    Copyright (C) 2020 Tarang Parikh
    
    Email : tp0265@gmail.com
    Project Home : https://github.com/tarangparikh/apricot
    
    Original Author : @author Tarang Parikh <tp0265@gmail.com>
    
*/

import com.apricot.core.business.repository.company.CompanyRepository;
import com.apricot.core.model.company.Company;
import com.apricot.core.model.user.User;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/company")
public class CompanyApi {
    private final CompanyRepository companyRepository;
    public CompanyApi(CompanyRepository companyRepository){
        this.companyRepository = companyRepository;
    }

    @GetMapping("/")
    public List<Company> getAll(){
        return companyRepository.findAll();
    }

    @GetMapping("/{user_id}")
    public List<Company> getByUser_Id(@PathVariable Integer user_id){
        return companyRepository.findByUser_Id(user_id);
    }

    @PostMapping("/post")
    public Company addCompany(@RequestBody Company company){
        return companyRepository.save(company);
    }
}
