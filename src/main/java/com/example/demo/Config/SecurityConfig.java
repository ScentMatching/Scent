package com.example.demo.Config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http.authorizeHttpRequests((authorizeRequests) -> {
            authorizeRequests.requestMatchers("/api/**").permitAll()
                    .requestMatchers("/api/**").authenticated()
                    .anyRequest().authenticated();
        }).formLogin((formLogin) -> {
            formLogin.loginPage("/api/users/signin");
        }).csrf(AbstractHttpConfigurer::disable);

        return http.build();
    }


}
