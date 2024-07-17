package com.example.demo.Controller;



import com.example.demo.Repository.UsersRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Log4j
public class HelloWorldController {
    @Autowired
    UsersRepository usersRepository;

    @GetMapping("/api")
    public String test() {
        String name = "hello";
        return name;
    }

    @GetMapping("/api/hello1")
    public String test1() {
        return "Hello";
    }
}
