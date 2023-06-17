package com.app.quiz.services;

import com.app.quiz.dao.AnswererRepository;
import com.app.quiz.dto.AnswererDto;
import com.app.quiz.models.Answerer;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AnswererServiceImpl implements AnswererService {

    private final AnswererRepository answererRepository;

    public AnswererServiceImpl(AnswererRepository answererRepository) {
        this.answererRepository = answererRepository;
    }

    @Override
    public List<Answerer> getAllAnswerer() {
        return answererRepository.getAllAnswerer();
    }

    @Override
    public Long createAnswerer(AnswererDto answererDto) {
        return answererRepository.createAnswerer(answererDto);
    }

    @Override
    public Answerer getAnswererById(Long id) {
        return answererRepository.getAnswererById(id);
    }
}
