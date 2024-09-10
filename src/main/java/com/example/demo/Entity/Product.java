package com.example.demo.Entity;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pd_id;

    @Column(name = "ca_id", length = 5)
    private String ca_id;

    @Column(name = "pd_name", nullable = false, unique = true, length = 20)
    private String pd_name;

    @Column(name = "pd_price", nullable = false)
    private BigDecimal pd_price;

    @Column(name = "pd_stock", nullable = false)
    private BigDecimal pd_stock = BigDecimal.ZERO; // 기본값 0

    @Column(name = "pd_description", nullable = false, length = 200)
    private String pd_description = "설명을 추가해 주세요"; // 기본값

    @Column(name = "pd_rating", nullable = false)
    private BigDecimal pd_rating = BigDecimal.ZERO; // 기본값


    @Column(name = "create_at", updatable = false)
    private LocalDateTime create_at = LocalDateTime.now();

    @Column(name = "update_at")
    private LocalDateTime update_at = LocalDateTime.now();


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

    public BigDecimal getPd_price() {
        return pd_price;
    }

    public void setPd_price(BigDecimal pd_price) {
        this.pd_price = pd_price;
    }

    public BigDecimal getPd_stock() {
        return pd_stock;
    }

    public void setPd_stock(BigDecimal pd_stock) {
        this.pd_stock = pd_stock;
    }

    public String getPd_description() {
        return pd_description;
    }

    public void setPd_description(String pd_description) {
        this.pd_description = pd_description;
    }

    public BigDecimal getPd_rating() {
        return pd_rating;
    }

    public void setPd_rating(BigDecimal pd_rating) {
        this.pd_rating = pd_rating;
    }


    public LocalDateTime getCreate_at() {
        return create_at;
    }

    public void setCreate_at(LocalDateTime create_at) {
        this.create_at = create_at;
    }

    public LocalDateTime getUpdate_at() {
        return update_at;
    }

    public void setUpdate_at(LocalDateTime update_at) {
        this.update_at = update_at;
    }
}
