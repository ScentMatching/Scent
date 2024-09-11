package com.example.demo.Service;

import com.example.demo.DTO.ProductDTO;
import com.example.demo.Entity.Product;
import com.example.demo.Entity.ProductImage;
import com.example.demo.Repository.ProductImageRepository;
import com.example.demo.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@Service

public class ProductService {

    @Autowired
    ProductRepository productRepository;

    @Autowired
    ProductImageRepository productImageRepository;
    @Autowired
    ProductImageService productImageService;

    public List<Product> findAll() {
        return productRepository.findAll();
    }

    public ProductDTO findById(Long id) {
        Optional<Product> productOptional = productRepository.findById(id); // 상품검색
        Optional<ProductImage> productImageOptional = productImageRepository.findByPd_id(id); // 상품 이미지
        if (productOptional.isPresent() && productImageOptional.isPresent()) { // 둘다 값이 있다면
            Product product = productOptional.get(); // 값 할당 후 리턴
            ProductImage productImage = productImageOptional.get();

            return new ProductDTO(product, productImage);
        }else{
            return null;
        }
    }

    public Long save(Product product,MultipartFile file) {
        // 상품저장
        productRepository.save(product);
        //상품이미지 저장
        productImageService.uploadProductImage(product,file);
        return product.getPd_id();
    }

//    public Page<Product> getProducts(int page, int size) {//paging
//        Pageable pageable = PageRequest.of(page, size);
//        return productRepository.findAll(pageable);
//    }
}
