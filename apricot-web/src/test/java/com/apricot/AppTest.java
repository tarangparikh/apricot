package com.apricot;

import static org.junit.Assert.assertTrue;

import com.apricot.api.UserApi;
import com.apricot.configuration.ConfigurationTest;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


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
