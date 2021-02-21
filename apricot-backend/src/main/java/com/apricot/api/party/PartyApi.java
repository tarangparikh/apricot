package com.apricot.api.party;

import com.apricot.api.company.CompanyApi;
import com.apricot.core.business.repository.party.PartyRepository;
import com.apricot.core.model.party.Party;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/*
    Apricot Management Suite
    Copyright (C) 2020 Tarang Parikh
    
    Email : tp0265@gmail.com
    Project Home : https://github.com/tarangparikh/apricot
    
    Original Author : @author Tarang Parikh <tp0265@gmail.com>
    
*/

@RestController
@RequestMapping("/api/party")
public class PartyApi {
    private final PartyRepository partyRepository;
    public PartyApi(PartyRepository partyRepository) {
        this.partyRepository = partyRepository;
    }

    @GetMapping("/")
    public List<Party> getAll() {
        return partyRepository.findAll();
    }

    @GetMapping("/{company_id}")
    public  List<Party> getByCompany_Id(@PathVariable Long company_id){
        return partyRepository.findAllByCompany_Id(company_id);
    }

    @PostMapping("/post")
    public Party addParty(@RequestBody Party party){
        return partyRepository.save(party);
    }

    @DeleteMapping("/delete/{party_id}")
    void deleteParty(@PathVariable Long party_id) {
        partyRepository.deleteById(party_id);
    }
}
