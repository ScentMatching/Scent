package com.example.demo.Controller;



import com.example.demo.Entity.Users;
import com.example.demo.Repository.UsersRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@Log4j
public class HelloWorldController {

    @Autowired
    UsersRepository usersRepository;

    @GetMapping("/api")
    public ArrayList<String> test() {
        ArrayList<String> list = new ArrayList<>();
        list.add("Hello World");
        list.add("Hello");
        Users users = new Users("rbals","rbalswkd","rbals1");
        usersRepository.save(users);
        Long id = 1L;
        System.out.println(list);
        return list;
    }

    @GetMapping("/api/hello1")
    public String test1() {
        return "Hello";
    }
}
