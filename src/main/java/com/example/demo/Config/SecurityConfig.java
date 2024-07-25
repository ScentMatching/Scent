package com.example.demo.Config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http.csrf(AbstractHttpConfigurer::disable).
                authorizeHttpRequests((authorizeRequests) -> {
                    authorizeRequests.requestMatchers("/**").permitAll() // 해당 경로에 대해서 접근 허용
                            .anyRequest().permitAll();
                }).formLogin((formLogin) -> {
                    formLogin.loginPage("/signin").permitAll();
                });

        return http.build();
    }


}
