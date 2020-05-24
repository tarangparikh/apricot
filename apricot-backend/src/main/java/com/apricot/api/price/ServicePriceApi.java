package com.apricot.api.price;
/* 
    Apricot Management Suite
    Copyright (C) 2020 Tarang Parikh
    
    Email : tp0265@gmail.com
    Project Home : https://github.com/tarangparikh/apricot
    
    Original Author : @author Tarang Parikh <tp0265@gmail.com>
    
*/

import com.apricot.core.business.repository.price.ProductPriceRepository;
import com.apricot.core.business.repository.price.ServicePriceRepository;
import com.apricot.core.model.price.ProductPrice;
import com.apricot.core.model.price.ServicePrice;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/servicePrice")
public class ServicePriceApi {
    private final ServicePriceRepository servicePriceRepository;
    public ServicePriceApi(ServicePriceRepository servicePriceRepository) {
        this.servicePriceRepository = servicePriceRepository;
    }

    @GetMapping("/")
    public List<ServicePrice> getAll() {
        return servicePriceRepository.findAll();
    }

    @GetMapping("/{gst_id}")
    public List<ServicePrice> getByGst_Id(@PathVariable Long gst_id){
        return servicePriceRepository.findAllByGst_Id(gst_id);
    }

    @PostMapping("/post")
    public ServicePrice addServicePrice(@RequestBody ServicePrice servicePrice){
        return servicePriceRepository.save(servicePrice);
    }

    @DeleteMapping("/delete/{servicePrice_id}")
    void deleteServicePrice(@PathVariable Long servicePrice_id) {
        servicePriceRepository.deleteById(servicePrice_id);
    }
}
