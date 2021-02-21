package com.apricot.api.units;
/* 
    Apricot Management Suite
    Copyright (C) 2020 Tarang Parikh
    
    Email : tp0265@gmail.com
    Project Home : https://github.com/tarangparikh/apricot
    
    Original Author : @author Tarang Parikh <tp0265@gmail.com>
    
*/

import com.apricot.core.business.repository.price.ServicePriceRepository;
import com.apricot.core.business.repository.units.UnitRepository;
import com.apricot.core.model.price.ServicePrice;
import com.apricot.core.model.units.Unit;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/unit")
public class UnitApi {
    private final UnitRepository unitRepository;
    public UnitApi(UnitRepository unitRepository){
        this.unitRepository = unitRepository;
    }

    @GetMapping("/")
    public List<Unit> getAll(){
        return unitRepository.findAll();
    }

    @GetMapping("/{company_id}")
    public List<Unit> getByCompany_Id(@PathVariable Long company_id) {
        return unitRepository.findAllByCompany_Id(company_id);
    }

    @PostMapping("/post")
    public Unit addUnit(@RequestBody Unit unit) {
        return unitRepository.save(unit);
    }

    @DeleteMapping("/delete/{unit_id}")
    void deleteUnit(@PathVariable Long unit_id) {
        unitRepository.deleteById(unit_id);
    }
}
