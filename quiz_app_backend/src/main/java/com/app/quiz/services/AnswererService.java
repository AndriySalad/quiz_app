package com.app.quiz.services;

import com.app.quiz.dto.AnswererDto;
import com.app.quiz.models.Answerer;

import java.util.List;

public interface AnswererService {

    List<Answerer> getAllAnswerer();
    Long createAnswerer(AnswererDto answererDto);
    Answerer getAnswererById(Long id) throws ClassNotFoundException;

}
