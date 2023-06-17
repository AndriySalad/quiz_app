package com.app.quiz.services;

import com.app.quiz.dao.QuestionRepository;
import com.app.quiz.models.Question;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionServiceImpl implements QuestionService{

    private final QuestionRepository questionRepository;

    public QuestionServiceImpl(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    @Override
    public List<Question> getAllQuestion() {
        return questionRepository.getAllQuestion();
    }
}
