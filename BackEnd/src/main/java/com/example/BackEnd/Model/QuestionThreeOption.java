package com.example.BackEnd.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "QuestionThreeOption")
public class QuestionThreeOption {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id")
    private Long id;

    @Column(name = "OptionValue")
    private String optionValue;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getOptionValue() {
        return optionValue;
    }

    public void setOptionValue(String optionValue) {
        this.optionValue = optionValue;
    }
}