package com.examly.springapp.service; 

import org.springframework.stereotype.Service;
import com.examly.springapp.model.User;
import com.examly.springapp.model.Admin;
import com.examly.springapp.model.Room;
import com.examly.springapp.repository.AdminRepository;
import com.examly.springapp.repository.UserRepository;
import com.examly.springapp.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;


@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private RoomRepository roomRepository;

    public User userProfileEdit(User user){
        return userRepository.save(user);
    }

    public List<Admin> userDashboard(){
        return (List<Admin>)adminRepository.findAll();
    }

    public List<Room> hotelRooms(int id){

        return roomRepository.findByAdminId(id);

    }

    public Room roomDetails(int id){

        return roomRepository.findById(id).get();

    }

    

}
