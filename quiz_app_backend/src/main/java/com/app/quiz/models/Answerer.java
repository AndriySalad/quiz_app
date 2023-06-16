package com.app.quiz.models;

import org.springframework.cglib.core.Local;

import java.time.LocalDateTime;

public class Answerer {

    private Long id;
    private String name;
    private Long total_score;
    private LocalDateTime creation_date;

    public Answerer() {
    }

    public Answerer(Long id, String name, Long total_score, LocalDateTime creation_date) {
        this.id = id;
        this.name = name;
        this.total_score = total_score;
        this.creation_date = creation_date;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getTotal_score() {
        return total_score;
    }

    public void setTotal_score(Long total_score) {
        this.total_score = total_score;
    }

    public LocalDateTime getCreation_date() {
        return creation_date;
    }

    public void setCreation_date(LocalDateTime creation_date) {
        this.creation_date = creation_date;
    }
}
