package com.examly.springapp.service;

import com.examly.springapp.model.Login;
import com.examly.springapp.model.Booking;
import com.examly.springapp.repository.UserRepository;
import com.examly.springapp.repository.AdminRepository;
import com.examly.springapp.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public class SuperService {

    @Value("${super.admin.username}")
    private String userName;

    @Value("${super.admin.password}")
    private String password;

    @Autowired
    UserRepository userRepository;

    @Autowired
    AdminRepository adminRepository;    

    @Autowired
    BookingRepository bookingRepository;



    public boolean validateSuperAdmin(Login login){
        if(login.getEmail().equals(userName) && login.getPassword().equals(password)) return true;
        return false;
    }

    public void deleteAdmin(int id){
        adminRepository.deleteById(id);
    }

    public void deleteUser(int id){
        userRepository.deleteById(id);
    }

    public List<Booking> allBookings(){
        return (List<Booking>)bookingRepository.findAll();
    }

}
