package com.example.demo.Controller;

import com.example.demo.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.demo.Entity.Product;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/posts")
public class PostController {


    @Autowired
    ProductRepository productRepository;

    @GetMapping
    public List<Product> getPosts(){
        List<Product> list=productRepository.findAll();
        for(Product p:list){
            System.out.println(p);
        }
    return productRepository.findAll();
    }

    @PostMapping
    public Product addPost(@RequestBody Product product){
         // product.setCreatedAt(LocalDateTime.now()); 시간추가

        return productRepository.save(product);
    }
}
