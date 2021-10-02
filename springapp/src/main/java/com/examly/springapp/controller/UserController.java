package com.examly.springapp.controller;


import com.examly.springapp.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.examly.springapp.service.UserService;
import java.util.List;


@RestController
public class UserController {
    
    @Autowired
    UserService userService;

    @PostMapping("/user/signup")
    public User registerUser(@RequestBody User user){
        return userService.createUser(user);
    }

}
