package com.example.BackEnd.Controller;

import com.example.BackEnd.Model.SurveyFour;
import com.example.BackEnd.UserRepository.SurveyFourRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SurveyFourController {

    @Autowired
    private SurveyFourRepository surveyResponseRepository;

    // Endpoint to save survey response
    @PostMapping("/api/responsesFour")
    public ResponseEntity<String> saveSurveyResponse(@RequestBody SurveyFour surveyResponse) {
        try {
            surveyResponseRepository.save(surveyResponse);
            return ResponseEntity.ok("Survey response saved successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to save survey response.");
        }
    }
}
