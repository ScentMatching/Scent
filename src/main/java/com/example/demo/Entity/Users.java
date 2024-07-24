package com.example.demo.Entity;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "users")

public class Users {

    public Users(){
        this.role = "USER";
    }

    @Id
    @JsonSerialize
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Column(name = "nick_name", nullable = false)
    @JsonSerialize
    private String nickName;

    @Column(nullable = false, unique = true)
    @JsonSerialize
    private String email;

    @Column(name = "password", nullable = false)
    @JsonSerialize
    private String password;

    @JsonSerialize
    private String image;

    @JsonSerialize
    @Column(nullable = false)
    private String role;



    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }


    @Override
    public String toString() {
        return  "{" +
                "id=" + id +
                ", nick_name='" + nickName + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
// Getters, Setters, Constructors
}
