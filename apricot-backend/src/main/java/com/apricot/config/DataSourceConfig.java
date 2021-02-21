package com.apricot.config;

import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

@Configuration
public class DataSourceConfig {
    private static final String databaseUrl = System.getenv("JDBC_DATABASE_URL");


    @Bean
    public DataSource getDataSource() {
        if(databaseUrl!=null){
            String dbUrl = System.getenv("JDBC_DATABASE_URL");
            String username = System.getenv("JDBC_DATABASE_USERNAME");
            String password = System.getenv("JDBC_DATABASE_PASSWORD");
            DataSourceBuilder dataSourceBuilder = DataSourceBuilder.create();
            dataSourceBuilder.driverClassName("org.postgresql.Driver");
            dataSourceBuilder.url(dbUrl);
            dataSourceBuilder.username(username);
            dataSourceBuilder.password(password);
            return dataSourceBuilder.build();
        }

        DataSourceBuilder dataSourceBuilder = DataSourceBuilder.create();
        dataSourceBuilder.driverClassName("org.h2.Driver");
        dataSourceBuilder.url("jdbc:h2:mem:test");
        dataSourceBuilder.username("SA");
        dataSourceBuilder.password("");
        return dataSourceBuilder.build();
    }

}
