package com.examly.springapp.service; 

import org.springframework.stereotype.Service;

import com.examly.springapp.model.Login;

import com.examly.springapp.model.User;
import com.examly.springapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;


@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    public User createUser(User user){
        return userRepository.save(user);
    }

    public Boolean isUserPresent(Login login) throws Exception{
        User user = userRepository.findByEmail(login.getEmail());
        if(user == null) throw new Exception("User Not Found");
        if(user.getPassword().equals(login.getPassword())) return true;
        return false;
    }

    public List<User> getUsers(){
        return (List<User>)userRepository.findAll();
    }

}
