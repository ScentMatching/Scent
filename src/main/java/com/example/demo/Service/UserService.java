package com.example.demo.Service;

import com.example.demo.Entity.Users;
import com.example.demo.Repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UsersRepository usersRepository;

    public Users SaveUser(Users user) {
        return usersRepository.save(user);
    }
}
