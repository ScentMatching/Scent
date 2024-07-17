package com.example.demo;


import com.example.demo.Entity.Users;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.ANY)
@EnableJpaRepositories
public class DB_TEST {


    @Autowired
    private UsersRepository usersRepository;

    @Test
    void shouldSaveAndFindUser() {
        // Given
        Users user = new Users();
        user.setUsername("testuser");
        user.setEmail("testuser@example.com");
        user.setPassword("testpassword");

        // When
        Users savedUser = usersRepository.save(user);

    }

}
