package com.apricot;

import static org.junit.Assert.assertTrue;

import com.apricot.api.user.UserApi;
import com.apricot.configuration.ConfigurationTest;

import com.apricot.core.business.repository.Item.ProductRepository;
import com.apricot.core.business.repository.company.CompanyRepository;
import com.apricot.core.business.repository.user.UserRepository;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.function.Consumer;

/**
 * Unit test for simple App.
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = ConfigurationTest.class)
public class AppTest
{
    /**
     * Rigorous Test :-)
     */
    @Autowired
    UserRepository userRepository;
    @Autowired
    ProductRepository productRepository;
    @Autowired
    CompanyRepository companyRepository;

    @Test
    public void contexLoads() throws Exception {
        userRepository.findAll();
    }

    @Test
    public void contexLoads1() throws Exception {
        productRepository.findAll();
    }

    @Test
    public void contexLoads2() throws Exception {
        companyRepository.findAll();
    }

}
