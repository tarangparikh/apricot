package com.apricot.core.business.repository.purchase;

import com.apricot.core.model.category.Category;
import com.apricot.core.model.purchase.PurchaseOrder;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PurchaseOrderRepository extends JpaRepository {
    List<PurchaseOrder> findAllByCompany_Id(Long id);
    List<PurchaseOrder> findAllByParty_Id(Long id);
}
