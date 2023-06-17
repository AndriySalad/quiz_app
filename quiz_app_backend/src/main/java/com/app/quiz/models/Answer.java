package com.app.quiz.models;

public class Answer {
    private Long questionId;

    private int option;


    public Answer(Long questionId, int option) {
        this.questionId = questionId;
        this.option = option;
    }

    public Answer() {
    }


    public Long getQuestionId() {
        return questionId;
    }

    public void setQuestionId(Long questionId) {
        this.questionId = questionId;
    }


    public int getOption() {
        return option;
    }

    public void setOption(int option) {
        this.option = option;
    }
}
