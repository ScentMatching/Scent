package com.example.demo.Entity;

import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
@Table(name = "product_Image")

public class ProductImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToOne
    @JoinColumn(name = "pd_id",nullable = false)
    private Product product; //FK

    @Column(name = "image_Path")
    private String imagePath;

    @Column(name = "create_at", updatable = false)
    private Timestamp create_at = new Timestamp(System.currentTimeMillis()); // 기본값

    @Column(name = "update_at")
    private Timestamp update_at = new Timestamp(System.currentTimeMillis()); // 기본값


    public ProductImage() {}
    // 생성자
    public ProductImage(Product product, String imagePath) {
        this.product = product;
        this.imagePath = imagePath;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

    public Timestamp getCreate_at() {
        return create_at;
    }

    public void setCreate_at(Timestamp create_at) {
        this.create_at = create_at;
    }

    public Timestamp getUpdate_at() {
        return update_at;
    }

    public void setUpdate_at(Timestamp update_at) {
        this.update_at = update_at;
    }
}
