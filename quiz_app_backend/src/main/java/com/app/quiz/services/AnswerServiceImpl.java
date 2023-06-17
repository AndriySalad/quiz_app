package com.app.quiz.services;

import com.app.quiz.dao.AnswerRepository;
import com.app.quiz.dto.AnswersDto;
import com.app.quiz.dto.ResultAnswer;
import com.app.quiz.dto.ResultResponse;
import com.app.quiz.models.Answerer;
import com.app.quiz.models.Question;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnswerServiceImpl implements AnswerService {

    private final AnswererService answererService;
    private final QuestionService questionService;
    private final AnswerRepository answerRepository;

    public AnswerServiceImpl(AnswererService answererService, QuestionService questionService, AnswerRepository answerRepository) {
        this.answererService = answererService;
        this.questionService = questionService;
        this.answerRepository = answerRepository;
    }

    @Override
    public void saveAnswers(AnswersDto answersDto) throws ClassNotFoundException {
        Answerer answerer = answererService.getAnswererById(answersDto.getAnswererId());
        List<Question> questions = questionService.getAllQuestion();
        for(int i = 0; i < answersDto.getAnswers().size(); i++){
            answerRepository.saveAnswers(answerer.getId(),
                    answersDto.getAnswers().get(i).getQuestionId(),
                    answersDto.getAnswers().get(i).getOption(),
                    answersDto.getAnswers().get(i).getOption() == questions.get(i).getAnswer());
        }
    }

    @Override
    public ResultResponse getAnswersByUser(Long answererId) throws ClassNotFoundException {
        Answerer answerer = answererService.getAnswererById(answererId);
        List<ResultAnswer> answers = answerRepository.getAnswersByUserId(answererId);
        ResultResponse resultResponse = new ResultResponse();
        resultResponse.setAnswers(answers);
        resultResponse.setAnswerer(answerer);
        return resultResponse;
    }
}
