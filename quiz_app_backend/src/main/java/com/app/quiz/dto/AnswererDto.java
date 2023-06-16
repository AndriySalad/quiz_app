package com.app.quiz.dto;

public class AnswererDto {
    private String name;

    public AnswererDto(String name) {
        this.name = name;
    }

    public AnswererDto() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
