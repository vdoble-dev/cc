package edu.uancv.configuration;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@ComponentScan(basePackages = "edu.uancv")
@EntityScan(basePackages = "edu.uancv.domain")
@EnableTransactionManagement
public class CCMain {
    public static void main(String[] args) {
        SpringApplication.run(CCMain.class, args);
    }
}
