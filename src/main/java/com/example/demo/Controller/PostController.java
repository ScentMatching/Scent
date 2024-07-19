package com.example.demo.Controller;

import com.example.demo.Repository.ProductRepository;
import com.example.demo.Service.ProductService;
import lombok.extern.log4j.Log4j;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.demo.Entity.Product;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/posts")
public class PostController {


    @Autowired
    ProductService productService;

    @GetMapping
    public List<Product> getPosts(){
        List<Product> list=productService.findAll();
        Optional<Product> product = productService.findById(2L);
        System.out.println(product);
        System.out.println(list);
        for(Product p:list){
            System.out.println(p);
        }
    return list;
    }

//    @PostMapping
//    public Product addPost(@RequestBody Product product){
//         // product.setCreatedAt(LocalDateTime.now()); 시간추가
//
//        return productRepository.save(product);
//    }
}
