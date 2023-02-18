package com.example.BackEnd.Service;

import com.example.BackEnd.Model.User;

import java.util.List;

public interface UserService {
    public User saveUser(User user);
    public List<User> getAllUsers();
}
