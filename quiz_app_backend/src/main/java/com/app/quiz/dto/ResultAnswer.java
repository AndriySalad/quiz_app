package com.app.quiz.dto;

public class ResultAnswer {
    private String questionDescription;
    private boolean correctness;

    public ResultAnswer(String questionDescription, boolean correctness) {
        this.questionDescription = questionDescription;
        this.correctness = correctness;
    }

    public ResultAnswer() {
    }

    public String getQuestionDescription() {
        return questionDescription;
    }

    public void setQuestionDescription(String questionDescription) {
        this.questionDescription = questionDescription;
    }

    public boolean isCorrectness() {
        return correctness;
    }

    public void setCorrectness(boolean correctness) {
        this.correctness = correctness;
    }
}
