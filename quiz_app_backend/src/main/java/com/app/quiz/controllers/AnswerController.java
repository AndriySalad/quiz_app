package com.app.quiz.controllers;

import com.app.quiz.dto.AnswersDto;
import com.app.quiz.dto.ResultResponse;
import com.app.quiz.services.AnswerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/app/quiz")
@RestController
public class AnswerController {

    private final AnswerService answerService;

    public AnswerController(AnswerService answerService) {
        this.answerService = answerService;
    }

    @PostMapping("/answers")
    public ResponseEntity<HttpStatus> createAnswers(@RequestBody AnswersDto answersDto) throws ClassNotFoundException {
        answerService.saveAnswers(answersDto);
        return ResponseEntity.status(HttpStatus.OK).body(HttpStatus.OK);
    }
    @GetMapping("/answers/{id}")
    public ResponseEntity<ResultResponse> getAnswers(@PathVariable Long id) throws ClassNotFoundException {
        return ResponseEntity.status(HttpStatus.OK).body(answerService.getAnswersByUser(id));
    }
}
