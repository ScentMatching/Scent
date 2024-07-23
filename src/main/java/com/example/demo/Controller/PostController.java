package com.example.demo.Controller;

import com.example.demo.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.Entity.Product;
@RestController
@RequestMapping("/api/posts")
public class PostController {


    @Autowired
    ProductService productService;

    @GetMapping
    public Page<Product> getPosts(@RequestParam(defaultValue = "0") int page,
                                  @RequestParam(defaultValue = "10") int size){

    return productService.getProducts(page,size);
    }

    @PostMapping
    public ResponseEntity<Void> addPost(@RequestBody Product product){
         // product.setCreatedAt(LocalDateTime.now()); 시간추가
        System.out.println(product);
        productService.save(product);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
}
