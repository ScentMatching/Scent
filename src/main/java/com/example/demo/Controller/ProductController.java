package com.example.demo.Controller;

import com.example.demo.DTO.ProductDTO;
import com.example.demo.Repository.ProductRepository;
import com.example.demo.Service.ProductService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.Entity.Product;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Base64;

@RestController
@RequestMapping("/product")
public class ProductController {


    private static final Logger log = LoggerFactory.getLogger(ProductController.class);
    @Autowired
    ProductService productService;

    @Autowired
    ProductRepository  productRepository;


    @PostMapping(consumes = "multipart/form-data")
    public ResponseEntity<Void> addPost( @RequestParam("pd_image") MultipartFile pd_image,
                                         @ModelAttribute Product product){
        log.info(product.getPd_description());
        Long id = productService.save(product,pd_image);
        log.info("Saved product with id {}", id);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping(value = "/{pd_id}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ProductDTO> getProduct(@PathVariable("pd_id") Long id){

        ProductDTO product = productService.findById(id);
        System.out.println(product);

        // 이미지 URL 생성
        String imageUrl = "/product/images/" + new File(product.getImagePath()).getName();

        product.setImagePath(imageUrl);
        log.info(product.getImagePath());

        return ResponseEntity.ok(product);
    }

    @GetMapping("/images/{filename:.+}")
    public byte[] getProductImages(@PathVariable String filename) throws IOException {
        File file = new File("src/main/resources/static/ProductImages/"+filename);
        return Files.readAllBytes(file.toPath());
    }



//    @GetMapping
//    public ResponseEntity<Map<String, Object>> getPosts(){
//        return
//    }


//    @GetMapping
//    public HttpEntity<PagedModel<Product>> getPeople(Pageable pageable,
//                                                     PagedResourcesAssembler assembler){
//
//            Page<Product> product = productRepository.findAll(pageable);
//            return ResponseEntity.ok(assembler.toModel(product));
//    }


}
