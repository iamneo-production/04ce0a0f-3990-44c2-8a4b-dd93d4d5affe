package com.examly.springapp.service; 

import org.springframework.stereotype.Service;
import com.examly.springapp.model.User;
import com.examly.springapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;


@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User createUser(User user){
        return userRepository.save(user);
    }

}
