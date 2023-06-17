package com.app.quiz.dto;

import com.app.quiz.dto.ResultAnswer;
import com.app.quiz.models.Answerer;

import java.util.List;

public class ResultResponse {
    private Answerer answerer;
    private List<ResultAnswer> answers;

    public ResultResponse(Answerer answerer, List<ResultAnswer> answers) {
        this.answerer = answerer;
        this.answers = answers;
    }

    public ResultResponse() {
    }

    public Answerer getAnswerer() {
        return answerer;
    }

    public void setAnswerer(Answerer answerer) {
        this.answerer = answerer;
    }

    public List<ResultAnswer> getAnswers() {
        return answers;
    }

    public void setAnswers(List<ResultAnswer> answers) {
        this.answers = answers;
    }
}
