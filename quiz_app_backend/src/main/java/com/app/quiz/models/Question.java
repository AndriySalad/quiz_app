package com.app.quiz.models;

import java.util.List;

public class Question {

    private Long id;
    private String description;
    private List<String> options;
    private int answer;

    public Question(Long id, String description, List<String> options, int answer) {
        this.id = id;
        this.description = description;
        this.options = options;
        this.answer = answer;
    }

    public Question() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<String> getOptions() {
        return options;
    }

    public void setOptions(List<String> options) {
        this.options = options;
    }

    public int getAnswer() {
        return answer;
    }

    public void setAnswer(int answer) {
        this.answer = answer;
    }
}
