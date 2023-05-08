package com.example.BackEnd.Service;

import com.example.BackEnd.Model.User;
import com.example.BackEnd.UserRepository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    
}



