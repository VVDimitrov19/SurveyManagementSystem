package com.example.BackEnd.Service;

import com.example.BackEnd.Model.User;
import com.example.BackEnd.UserRepository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    // Constructor injection of the UserRepository dependency
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Method to save a user in the database
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    // Method to retrieve a user by email from the database
    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
