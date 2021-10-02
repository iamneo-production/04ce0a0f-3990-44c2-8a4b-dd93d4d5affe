package com.examly.springapp.repository;

import com.examly.springapp.model.UserModel;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<UserModel, Integer> {

    UserModel findByEmail(String email);
    
}