package com.app.quiz.controllers;

import com.app.quiz.dto.AnswererDto;
import com.app.quiz.models.Answerer;
import com.app.quiz.services.AnswererService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("/app/quiz")
@RestController
public class AnswererController {

    private final AnswererService answererService;

    public AnswererController(AnswererService answererService) {
        this.answererService = answererService;
    }

    @GetMapping("/answerers")
    public ResponseEntity<List<Answerer>> getAnswerers(){
        return ResponseEntity.status(HttpStatus.OK).body(answererService.getAllAnswerer());
    }

    @GetMapping("/answerers/{id}")
    public ResponseEntity<Answerer> getAnswerers(@PathVariable Long id) throws ClassNotFoundException {
        return ResponseEntity.status(HttpStatus.OK).body(answererService.getAnswererById(id));
    }

    @PostMapping("/answerer")
    public ResponseEntity<Long> createAnswerer(@RequestBody AnswererDto answererDto){
        return ResponseEntity.status(HttpStatus.OK).body(answererService.createAnswerer(answererDto));
    }
}
