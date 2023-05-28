package com.example.BackEnd.UserRepository;

import com.example.BackEnd.Model.SurveyOne;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SurveyRepository extends JpaRepository<SurveyOne, Long> {
}
