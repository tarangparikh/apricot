package com.apricot;
/* 
    Apricot Management Suite
    Copyright (C) 2020 Tarang Parikh
    
    Email : tp0265@gmail.com
    Project Home : https://github.com/tarangparikh/apricot
    
    Original Author : @author Tarang Parikh <tp0265@gmail.com>
    
*/

import com.apricot.core.business.repository.Item.ItemRepository;
import com.apricot.core.business.repository.Item.ProductRepository;
import com.apricot.core.business.repository.Item.ServiceRepository;
import com.apricot.core.business.repository.category.CategoryRepository;
import com.apricot.core.business.repository.company.CompanyRepository;
import com.apricot.core.business.repository.units.UnitRepository;
import com.apricot.core.business.repository.user.UserRepository;
import com.apricot.core.model.category.Category;
import com.apricot.core.model.company.Company;
import com.apricot.core.model.user.User;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;

//@SpringBootApplication
public class Cli  implements CommandLineRunner {

    final UserRepository userRepository;
    final CompanyRepository companyRepository;
    final ItemRepository itemRepository;
    final ProductRepository productRepository;
    final ServiceRepository serviceRepository;
    final UnitRepository unitRepository;
    final CategoryRepository categoryRepository;

    public Cli(UserRepository userRepository,
               CompanyRepository companyRepository, ItemRepository itemRepository, ProductRepository productRepository, ServiceRepository serviceRepository, UnitRepository unitRepository, CategoryRepository categoryRepository) {
        this.userRepository = userRepository;
        this.companyRepository = companyRepository;
        this.itemRepository = itemRepository;
        this.productRepository = productRepository;
        this.serviceRepository = serviceRepository;
        this.unitRepository = unitRepository;
        this.categoryRepository = categoryRepository;
    }

    public static void main(String...args){
        SpringApplication.run(Cli.class,args);
    }

    @Override
    public void run(String... args) throws Exception {
        Category category = new Category();
    }
}
