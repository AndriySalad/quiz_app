package com.app.quiz.services;

import com.app.quiz.dto.AnswersDto;
import com.app.quiz.dto.ResultResponse;

public interface AnswerService {

    void saveAnswers(AnswersDto answersDto) throws ClassNotFoundException;

    ResultResponse getAnswersByUser(Long id) throws ClassNotFoundException;
}
