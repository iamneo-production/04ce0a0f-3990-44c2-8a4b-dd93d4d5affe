package com.examly.springapp.controller;


import com.examly.springapp.model.User;
import com.examly.springapp.model.Admin;
import com.examly.springapp.model.Login;
import com.examly.springapp.model.Room;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.examly.springapp.service.RoomService;

import com.examly.springapp.service.AuthService;
import java.util.List;


@RestController
public class RoomController {

    @Autowired
    RoomService roomService;

}
