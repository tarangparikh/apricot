package com.apricot.api.product;
/* 
    Apricot Management Suite
    Copyright (C) 2020 Tarang Parikh
    
    Email : tp0265@gmail.com
    Project Home : https://github.com/tarangparikh/apricot
    
    Original Author : @author Tarang Parikh <tp0265@gmail.com>
    
*/

import com.apricot.core.business.repository.Item.ProductRepository;
import com.apricot.core.model.item.Product;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/product")
public class ProductApi {
    private final ProductRepository productRepository;
    public ProductApi(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }
    @GetMapping("/")
    public List<Product> getAll() {return  this.productRepository.findAll(); }

    @GetMapping("/{company_id}")
    public List<Product> getByCompany_Id(@PathVariable Long company_id){
        return productRepository.findByCompany_Id(company_id);
    }

    @PostMapping("/post")
    public Product addProduct(@RequestBody Product product){
        return productRepository.save(product);
    }

    @DeleteMapping("/delete/{product_id}")
    void deleteCategory(@PathVariable Long product_id){
        productRepository.deleteById(product_id);
    }
}
