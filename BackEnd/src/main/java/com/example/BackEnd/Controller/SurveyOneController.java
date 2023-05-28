package com.example.BackEnd.Controller;

import com.example.BackEnd.Model.SurveyOne;
import com.example.BackEnd.UserRepository.SurveyOneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SurveyOneController {

    @Autowired
    private SurveyOneRepository surveyResponseRepository;

    // Endpoint to save survey response
    @PostMapping("/api/responsesOne")
    public ResponseEntity<String> saveSurveyResponse(@RequestBody SurveyOne surveyResponse) {
        try {
            surveyResponseRepository.save(surveyResponse);
            return ResponseEntity.ok("Survey response saved successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to save survey response.");
        }
    }
}
