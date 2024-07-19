package com.example.demo.Entity;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "products")
public class Product {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonSerialize
    private Long id;

    @Column(nullable = false)
    @JsonSerialize
    private String name;

    @Column(nullable = false)
    @JsonSerialize
    private double price;

    @Column(nullable = false)
    @JsonSerialize
    private int stock;

    @Column(nullable = false, columnDefinition = "TEXT")
    @JsonSerialize
    private String description;

}
