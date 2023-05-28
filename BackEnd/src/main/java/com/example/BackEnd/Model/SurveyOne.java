package com.example.BackEnd.Model;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Entity
@Table(name = "SurveyOne")
public class SurveyOne {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id")
    private Long id;

    @Column(name = "QuestionOne")
    private String question1;
    @Column(name = "QuestionTwo")
    private String question2;
    @OneToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE}, fetch = FetchType.EAGER)
    @JoinColumn(name = "survey_id")
    private List<QuestionThreeOption> question3;
    @Column(name = "QuestionFour")
    private String question4;
    @Column(name = "Text")
    private String recommendText;
    @Column(name = "Name")
    private String name;
    @Column(name = "Email")
    private String email;
    @Column(name = "Country")
    private String country;
    @Column(name = "Age")
    private Integer age;
    @ManyToOne
    @JoinColumn(name = "survey_id")
    private SurveyOne surveyOne;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getQuestion1() {
        return question1;
    }

    public void setQuestion1(String question1) {
        this.question1 = question1;
    }

    public String getQuestion2() {
        return question2;
    }

    public void setQuestion2(String question2) {
        this.question2 = question2;
    }

    public List<String> getQuestion3Values() {
        List<String> values = new ArrayList<>();
        for (QuestionThreeOption option : question3) {
            values.add(option.getOptionValue());
        }
        return values;
    }

    public String getQuestion4() {
        return question4;
    }

    public void setQuestion4(String question4) {
        this.question4 = question4;
    }

    public String getRecommendText() {
        return recommendText;
    }

    public void setRecommendText(String recommendText) {
        this.recommendText = recommendText;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }
}
