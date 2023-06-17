package com.app.quiz.dto;

import com.app.quiz.models.Answer;

import java.util.List;

public class AnswersDto {
    private Long answererId;
    private List<Answer> answerList;

    public AnswersDto(Long answererId, List<Answer> answerList) {
        this.answererId = answererId;
        this.answerList = answerList;
    }

    public AnswersDto() {
    }

    public Long getAnswererId() {
        return answererId;
    }

    public void setAnswererId(Long answererId) {
        this.answererId = answererId;
    }

    public List<Answer> getAnswerList() {
        return answerList;
    }

    public void setAnswerList(List<Answer> answerList) {
        this.answerList = answerList;
    }
}
