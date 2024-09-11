package com.example.demo.Repository;

import com.example.demo.Entity.ProductImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface ProductImageRepository extends JpaRepository<ProductImage, Long> {

    @Query("select p from ProductImage p where p.product.pd_id = :pd_id")
    Optional<ProductImage> findByPd_id(@Param("pd_id") long pd_id);

}
