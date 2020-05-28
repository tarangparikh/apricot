package com.apricot.api.purchase;


import com.apricot.core.business.repository.category.CategoryRepository;
import com.apricot.core.business.repository.purchase.PurchaseOrderRepository;
import com.apricot.core.model.category.Category;
import com.apricot.core.model.purchase.PurchaseOrder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/purchaseOrder")
public class PurchaseOrderApi {
    private final PurchaseOrderRepository purchaseOrderRepository;
    public PurchaseOrderApi(PurchaseOrderRepository purchaseOrderRepository) {
        this.purchaseOrderRepository = purchaseOrderRepository;
    }

    @GetMapping("/")
    public List<PurchaseOrder> getAll() {
        return purchaseOrderRepository.findAll();
    }

    @GetMapping("/{company_id}")
    public List<PurchaseOrder> getByCompany_Id(@PathVariable Long company_id) {
        return purchaseOrderRepository.findAllByCompany_Id(company_id);
    }

    @GetMapping("/party/{party_id}")
    public List<PurchaseOrder> getByParty_Id(@PathVariable Long party_id) {
        return purchaseOrderRepository.findAllByParty_Id(party_id);
    }


    @PostMapping("/post")
    public PurchaseOrder addPurchaseOrder(@RequestBody PurchaseOrder purchaseOrder) {
        return purchaseOrderRepository.save(purchaseOrder);
    }

    @DeleteMapping("/delete/{purchaseOrder_id}")
    void deletePurchaseOrder(@PathVariable Long purchaseOrder_id) {
        purchaseOrderRepository.deleteById(purchaseOrder_id);
    }
    
}
