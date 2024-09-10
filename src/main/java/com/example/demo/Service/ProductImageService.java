package com.example.demo.Service;


import com.example.demo.Entity.Product;
import com.example.demo.Entity.ProductImage;
import com.example.demo.Repository.ProductImageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;
import java.util.UUID;

@Service
public class ProductImageService {

    @Autowired
    ProductImageRepository productImageRepository;


    public void uploadProductImage(Product product, MultipartFile file) {
        try{
            String uploadsDir = "src/main/resources/static/ProductImages/";

            String dbFilePath = saveProductImage(uploadsDir,file);
            ProductImage productImage = new ProductImage(product,dbFilePath);
            productImageRepository.save(productImage);

        }catch (IOException e){
            e.printStackTrace();
        }

    }

    public String saveProductImage(String uploadsDir, MultipartFile file) throws IOException {

        // 파일 이름 생성
        String fileName = UUID.randomUUID().toString().replace("-","")+"_"+file.getOriginalFilename();

        // 실제 파일이 저장될 경로
        String filePath = uploadsDir + fileName;

        // DB에 저장할 경로 문자열
        String dbFilePath = "/ProductImages/" + fileName;

        Path path = Paths.get(filePath);

        Files.createDirectories(path.getParent());
        Files.write(path, file.getBytes()); // 디렉토리에 파일 저장

        return dbFilePath;
    }

}
