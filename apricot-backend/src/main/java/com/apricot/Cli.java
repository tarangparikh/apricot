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
import com.apricot.core.business.repository.party.PartyRepository;
import com.apricot.core.business.repository.purchase.PurchaseOrderRepository;
import com.apricot.core.business.repository.units.UnitRepository;
import com.apricot.core.business.repository.user.UserRepository;


import com.apricot.core.model.company.Company;
import com.apricot.core.model.gst.Gst;
import com.apricot.core.model.gst.GstType;
import com.apricot.core.model.item.CartItem;
import com.apricot.core.model.item.Item;
import com.apricot.core.model.party.Party;
import com.apricot.core.model.purchase.PurchaseOrder;
import com.apricot.core.model.stock.Stock;
import com.apricot.core.business.repository.gst.GstRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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
    final PurchaseOrderRepository purchaseOrderRepository;
    final PartyRepository partyRepository;

    public Cli(UserRepository userRepository,
               CompanyRepository companyRepository, ItemRepository itemRepository, ProductRepository productRepository, ServiceRepository serviceRepository, UnitRepository unitRepository, CategoryRepository categoryRepository, GstRepository gstRepository, PurchaseOrderRepository purchaseOrderRepository, PartyRepository partyRepository) {
        this.userRepository = userRepository;
        this.companyRepository = companyRepository;
        this.itemRepository = itemRepository;
        this.productRepository = productRepository;
        this.serviceRepository = serviceRepository;
        this.unitRepository = unitRepository;
        this.categoryRepository = categoryRepository;
        this.gstRepository = gstRepository;
        this.purchaseOrderRepository = purchaseOrderRepository;
        this.partyRepository = partyRepository;
    }

    public static void main(String...args){
        SpringApplication.run(Cli.class,args);
    }

    @Override
    public void run(String... args) throws Exception {
        Party party = partyRepository.findAllByCompany_Id(1L).get(0);
        Company company = companyRepository.findById(1L).get();
        Item item = productRepository.findById(1L).get();
        Date date = Date.valueOf(LocalDate.now());
        String purchaseOrderNumber = "PO123";
        String paymentType = "CASH";
        String desciption = "hhihihi";
        Double rececivedAmount = 4545.45;
        Gst gst = new Gst();
        gst.setGstType(GstType.GST);
        gst.setGstRate(12L);
        CartItem cartItem = new CartItem();
        cartItem.setItem(item);
        cartItem.setFreeQuantity(1);
        cartItem.setQuantity(25);
        cartItem.setRate(45.55);
        cartItem.setAdditionalCess(10.0);
        cartItem.setDiscountRate(10.0);
        cartItem.setGst(gst);
        cartItem.setTaxIncluded(1);
        List<CartItem> cartItems = new ArrayList<>();
        cartItems.add(cartItem);

        PurchaseOrder purchaseOrder = new PurchaseOrder();
        purchaseOrder.setParty(party);
        purchaseOrder.setCompany(company);
        purchaseOrder.setPurchaseOrderDate(date);
        purchaseOrder.setPurchaseOrderNumber(purchaseOrderNumber);
        purchaseOrder.setCartItems(cartItems);
        purchaseOrder.setPaymentType(paymentType);
        purchaseOrder.setDescription(desciption);
        purchaseOrder.setDescription("GUJARAT");
        purchaseOrder.setReceivedAmount(rececivedAmount);

       // purchaseOrderRepository.save(purchaseOrder);

    }
}
