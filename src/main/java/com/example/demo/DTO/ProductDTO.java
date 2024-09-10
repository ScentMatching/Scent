package com.example.demo.DTO;


import com.example.demo.Entity.Product;
import com.example.demo.Entity.ProductImage;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Optional;


public class ProductDTO {

    private Long pd_id;
    private String ca_id;
    private String pd_name;
    private BigDecimal pd_stock;
    private BigDecimal pd_price;
    private String pd_description;
    private String imagePath;

    public ProductDTO() {}

    public ProductDTO(Product product, ProductImage productImage) {
        this.pd_id = product.getPd_id();
        this.ca_id = product.getCa_id();
        this.pd_name = product.getPd_name();
        this.pd_stock = product.getPd_stock();
        this.pd_price = product.getPd_price();
        this.pd_description = product.getPd_description();
        this.imagePath = productImage.getImagePath();
    }

    public Long getPd_id() {
        return pd_id;
    }

    public void setPd_id(Long pd_id) {
        this.pd_id = pd_id;
    }

    public String getCa_id() {
        return ca_id;
    }

    public void setCa_id(String ca_id) {
        this.ca_id = ca_id;
    }

    public String getPd_name() {
        return pd_name;
    }

    public void setPd_name(String pd_name) {
        this.pd_name = pd_name;
    }

    public BigDecimal getPd_stock() {
        return pd_stock;
    }

    public void setPd_stock(BigDecimal pd_stock) {
        this.pd_stock = pd_stock;
    }

    public BigDecimal getPd_price() {
        return pd_price;
    }

    public void setPd_price(BigDecimal pd_price) {
        this.pd_price = pd_price;
    }

    public String getPd_description() {
        return pd_description;
    }

    public void setPd_description(String pd_description) {
        this.pd_description = pd_description;
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

    @Override
    public String toString() {
        return "pd_id=" + pd_id + ", ca_id=" + ca_id + "pd_stock" + pd_stock + ", pd_description=" + pd_description + ", imagePath=" + imagePath;
    }
}
