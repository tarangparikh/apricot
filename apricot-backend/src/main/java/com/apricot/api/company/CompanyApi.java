package com.apricot.api.company;
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
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/company")
public class CompanyApi {
    private final CompanyRepository companyRepository;
    private final UserRepository userRepository;
    public CompanyApi(CompanyRepository companyRepository, UserRepository userRepository) {
        this.companyRepository = companyRepository;
        this.userRepository = userRepository;
    }

    @GetMapping("/")
    public List<Company> getAll(){
        return companyRepository.findAll();
    }

    @GetMapping("/{user_id}")
    public List<Company> getByUser_Id(@PathVariable Long user_id){
        return companyRepository.findByUser_Id(user_id);
    }
    @PostMapping("/post")
    public Company addCompany(@RequestBody Company company){
        return companyRepository.save(company);
    }

    @PostMapping("/post/{user_id}")
    public ResponseEntity<Company> addCompanyByUser_Id(@RequestBody Company company, @PathVariable Long user_id){
        Optional<User> user = userRepository.findById(user_id);
        if(!user.isPresent()) return ResponseEntity.badRequest().build();
        company.setUser(user.get());
        Company save = companyRepository.save(company);
        return new ResponseEntity<Company>(save,HttpStatus.OK);
    }
    @DeleteMapping("/delete/{company_id}")
    void deleteCompany(@PathVariable Long company_id) {
        companyRepository.deleteById(company_id);
    }
}
