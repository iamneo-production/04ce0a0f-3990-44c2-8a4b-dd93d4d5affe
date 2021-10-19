package com.examly.springapp.service; 

import org.springframework.stereotype.Service;

import com.examly.springapp.model.Admin;
import com.examly.springapp.model.Login;
import com.examly.springapp.model.Room;

import com.examly.springapp.model.User;
import com.examly.springapp.repository.RoomRepository;
import com.examly.springapp.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;


@Service
public class AdminService {

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private AdminRepository adminRepository;

    public Admin editAdmin(Admin admin){
        return adminRepository.save(admin);
    }

    public Admin getProfile(int id){
        return adminRepository.findById(id).get();
    }

    public Admin getProfileById(int id){
        return adminRepository.findById(id).get();
    }
    public List<Admin> admins() {
        return (List<Admin>) adminRepository.findAll();
    }

    public Admin getRooms(String email){
        return adminRepository.findByEmail(email);
    }


}
