package com.apricot.api.purchase;

import com.apricot.core.business.repository.purchase.PurchaseRepository;
import com.apricot.core.model.purchase.Purchase;
import com.apricot.core.model.purchase.PurchaseType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/purchase")
public class purchaseApi {
    private final PurchaseRepository purchaseRepository;

    public purchaseApi(PurchaseRepository purchaseRepository)
    {
        this.purchaseRepository = purchaseRepository;
    }
    @GetMapping("/PurchaseOrder")
    public int insert()
    {
        Purchase purchase = new Purchase();
        purchase.setTotalAmount(2000L);
        purchase.setPaidAmount(1500L);
        purchase.setPurchaseType(PurchaseType.CASH);
        purchase.setDescription("purchased goods");
        purchase.setState("active");
        Purchase save = purchaseRepository.save(purchase);
        return save.getId();
    }
    @GetMapping("/PurchaseBill")
    public List<Purchase> getAll()
    {
        return purchaseRepository.findAll();
    }

}
