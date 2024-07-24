package com.example.demo.Controller;


import com.example.demo.Entity.Users;
import com.example.demo.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/signup")
    public String signup(@RequestBody Users user) {
        System.out.println(user);
        userService.SaveUser(user);
        return "success";
    }


//    @PostMapping("/signin")
//    public String signin(@RequestBody Users user) {
//        System.out.println(user);
//        return "success";
//    }



}
