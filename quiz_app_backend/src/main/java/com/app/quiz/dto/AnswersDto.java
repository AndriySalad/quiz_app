package com.app.quiz.dto;

import com.app.quiz.models.Answer;

import java.util.List;

public class AnswersDto {
    private Long answererId;
    private List<Answer> answers;

    public AnswersDto(Long answererId, List<Answer> answers) {
        this.answererId = answererId;
        this.answers = answers;
    }

    public AnswersDto() {
    }

    public Long getAnswererId() {
        return answererId;
    }

    public void setAnswererId(Long answererId) {
        this.answererId = answererId;
    }

    public List<Answer> getAnswers() {
        return answers;
    }

    public void setAnswers(List<Answer> answers) {
        this.answers = answers;
    }
}
