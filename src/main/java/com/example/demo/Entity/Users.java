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
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long user_code;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "nickname", nullable = false)
    private String nickName;

    @Column(name = "password", nullable = false)
    private String password;

    private String image;

    @Column(nullable = false)
    private String role;


    @Override
    public String toString() {
        return  "{" +
                ", nick_name='" + nickName + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }

    public long getUser_code() {
        return user_code;
    }

    public void setUser_code(long user_code) {
        this.user_code = user_code;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
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

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
    // Getters, Setters, Constructors
}
