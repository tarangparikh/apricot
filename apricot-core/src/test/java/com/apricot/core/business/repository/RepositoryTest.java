package com.apricot.core.business.repository;

import static org.junit.Assert.assertTrue;

import com.apricot.core.business.configuration.ConfigurationTest;
import com.apricot.core.business.repository.user.UserRepository;
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
public class RepositoryTest
{
    /**
     * Rigorous Test :-)
     */
    @Autowired UserRepository userRepository;

    @Test
    public void shouldAnswerWithTrue()
    {
        assertTrue( true );
    }
}
