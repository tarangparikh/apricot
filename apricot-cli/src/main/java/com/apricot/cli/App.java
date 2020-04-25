package com.apricot.cli;

import com.apricot.core.business.repositories.company.CompanyRepository;
import com.apricot.core.business.repositories.user.UserRepository;
import com.apricot.core.model.user.User;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * Hello world!
 *
 */
@EnableJpaRepositories("com.apricot.core.business.repositories")
@EnableAutoConfiguration
@Configuration
@ComponentScan
@EntityScan({"com.apricot.core.model"})
public class App
{
    public static Logger logger = LogManager.getLogger(App.class);
    public static void main( String[] args )
    {
        SpringApplication.run(App.class,args);
    }
    @Bean
    public CommandLineRunner commandLineRunner(UserRepository userRepository,
                                               CompanyRepository companyRepository) {
        return args -> {
            System.out.println(companyRepository.findAll());
            userRepository.save(new User("tarang","tarang"));
            System.out.println(userRepository.findByUserName("tarang"));




        };
    }
}
