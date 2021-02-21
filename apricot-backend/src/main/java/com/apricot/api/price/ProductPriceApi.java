package com.apricot.api.price;
/* 
    Apricot Management Suite
    Copyright (C) 2020 Tarang Parikh
    
    Email : tp0265@gmail.com
    Project Home : https://github.com/tarangparikh/apricot
    
    Original Author : @author Tarang Parikh <tp0265@gmail.com>
    
*/

import com.apricot.core.business.repository.party.PartyRepository;
import com.apricot.core.business.repository.price.ProductPriceRepository;
import com.apricot.core.model.party.Party;
import com.apricot.core.model.price.ProductPrice;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/productPrice")
public class ProductPriceApi {
    private final ProductPriceRepository productPriceRepository;
    public ProductPriceApi(ProductPriceRepository productPriceRepository) {
        this.productPriceRepository = productPriceRepository;
    }

    @GetMapping("/")
    public List<ProductPrice> getAll() {
        return productPriceRepository.findAll();
    }

    @GetMapping("/{gst_id}")
    public List<ProductPrice> getByGst_Id(@PathVariable Long gst_id){
         return productPriceRepository.findAllByGst_Id(gst_id);
        }

    @PostMapping("/post")
    public ProductPrice addProductPrice(@RequestBody ProductPrice productPrice){
        return productPriceRepository.save(productPrice);
    }

    @DeleteMapping("/delete/{productPrice_id}")
    void deleteProductPrice(@PathVariable Long productPrice_id) {
        productPriceRepository.deleteById(productPrice_id);
    }
}
