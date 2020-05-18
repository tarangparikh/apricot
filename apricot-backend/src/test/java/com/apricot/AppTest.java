package com.apricot;

import static org.junit.Assert.assertTrue;

import com.apricot.api.user.UserApi;
import com.apricot.configuration.ConfigurationTest;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

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
    UserApi userApi;

    @Test
    public void contexLoads() throws Exception {
        Assert.assertNotNull(userApi);
    }
}
