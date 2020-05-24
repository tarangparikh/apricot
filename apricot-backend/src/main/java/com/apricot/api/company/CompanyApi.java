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
import java.util.stream.Collectors;

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

    @GetMapping("/current/{user_id}")
    public Company getCurrentCompanyByUser_Id(@PathVariable Long user_id){
        return companyRepository.findByUser_IdAndIsSelected(user_id,1);
    }

    @GetMapping("/{user_id}")
    public List<Company> getByUser_Id(@PathVariable Long user_id){
        return companyRepository.findByUser_Id(user_id);
    }

    @PostMapping("/post")
    public Company addCompany(@RequestBody Company company){
        boolean exists = companyRepository.existsByUser_Id(company.getUser().getId());
        if(!exists) {
            company.setIsSelected(1);
        }else{
            company.setIsSelected(0);
        }
        return companyRepository.save(company);
    }
    @PostMapping("/post/current")
    public Company changeCurrentCompany(@RequestBody Company company){
        boolean exist = companyRepository.existsByUser_Id(company.getUser().getId());
        if (exist) {
            Company prev_current = companyRepository.findByUser_IdAndIsSelected(company.getUser().getId(), 1);
            if(prev_current!=null){
                prev_current.setIsSelected(0);
                companyRepository.save(prev_current);
            }
        }
        company.setIsSelected(1);
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
        //soft dumping the error if company doesn't exist
        Optional<Company> byId = companyRepository.findById(company_id);
        if(!byId.isPresent()) return;
        User user = byId.get().getUser();

        Company proposed_company = byId.get();
        Company byUser_idAndIsSelected = companyRepository.findByUser_IdAndIsSelected(user.getId(), 1);

        if(proposed_company.getId().equals(byUser_idAndIsSelected.getId())){
            List<Company> byUser_id = companyRepository.findByUser_Id(user.getId()).stream().filter(company -> !company.getId().equals(proposed_company.getId())).collect(Collectors.toList());
            if(byUser_id.size()>0){
                Company company = byUser_id.get(0);
                company.setIsSelected(1);
                companyRepository.save(company);
                System.out.println(company);
            }
        }
        companyRepository.deleteById(company_id);
    }
}
