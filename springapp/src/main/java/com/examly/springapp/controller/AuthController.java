package com.examly.springapp.controller;


import com.examly.springapp.model.User;
import com.examly.springapp.model.Login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.examly.springapp.service.AuthService;
import java.util.List;


@RestController
public class AuthController {
    
    @Autowired
    AuthService service;

    @PostMapping("/user/signup")
    public User registerUser(@RequestBody User user){
        return service.createUser(user);
    }

    @PostMapping("/user/login")
    public Boolean isUserPresent(@RequestBody Login login) throws Exception{
        return service.isUserPresent(login);
    }

}
