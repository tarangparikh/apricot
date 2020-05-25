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


import com.apricot.core.model.gst.Gst;
import com.apricot.core.model.gst.GstType;
import com.apricot.core.model.item.Product;
import com.apricot.core.model.price.ProductPrice;
import com.apricot.core.model.stock.Stock;
import com.apricot.core.business.repository.gst.GstRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

//@SpringBootApplication
public class Cli  implements CommandLineRunner {

    final UserRepository userRepository;
    final CompanyRepository companyRepository;
    final ItemRepository itemRepository;
    final ProductRepository productRepository;
    final ServiceRepository serviceRepository;
    final UnitRepository unitRepository;
    final CategoryRepository categoryRepository;
    final GstRepository gstRepository;

    public Cli(UserRepository userRepository,
               CompanyRepository companyRepository, ItemRepository itemRepository, ProductRepository productRepository, ServiceRepository serviceRepository, UnitRepository unitRepository, CategoryRepository categoryRepository, GstRepository gstRepository) {
        this.userRepository = userRepository;
        this.companyRepository = companyRepository;
        this.itemRepository = itemRepository;
        this.productRepository = productRepository;
        this.serviceRepository = serviceRepository;
        this.unitRepository = unitRepository;
        this.categoryRepository = categoryRepository;
        this.gstRepository = gstRepository;
    }

    public static void main(String...args){
        SpringApplication.run(Cli.class,args);
    }

    @Override
    public void run(String... args) throws Exception {
        List<Company> byUser_id = companyRepository.findByUser_Id(1L);
        List<Category> allByCompany_id = categoryRepository.findAllByCompany_Id(byUser_id.get(0).getId());

        Product product = new Product();
        product.setProductName("HOLA CREAM");
        product.setItemCode("ST123");
        product.setHsnSacCode("HSN123");
        product.setCompany(byUser_id.get(0));
        product.setCategory(allByCompany_id.get(0));
        Stock stock = new Stock();
        stock.setLocation("Gujarat");
        stock.setQuantity(1000L);
        stock.setMinimumQuntity(45L);
        stock.setValue(12L);
        ProductPrice productPrice = new ProductPrice();
        productPrice.setPurchasePrice(45L);
        productPrice.setSalePrice(46L);
        productPrice.setSaleTaxIncluded(0);
        productPrice.setPurchaseTaxIncluded(0);
        Gst gst = new Gst();
        gst.setGstType(GstType.GST);
        gst.setGstRate(18L);
        productPrice.setGst(gst);
        productPrice.setAdditionalCess(1L);
        product.setProductPrice(productPrice);
        product.setStock(stock);
        productRepository.save(product);
    }
}
