package com.apricot;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Hello world!
 *
 */
@SpringBootApplication
public class App 
{
    public static Logger logger = LogManager.getLogger(App.class);
    public static void main( String[] args )
    {
        logger.info("Application Started");
        SpringApplication.run(App.class,args);
    }
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedMethods("POST","DELETE","GET");

            }
        };
    }
}
