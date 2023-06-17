package com.app.quiz.dao;

import com.app.quiz.mapper.QuestionMapper;
import com.app.quiz.models.Question;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class QuestionRepository {

    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public QuestionRepository(NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
        this.namedParameterJdbcTemplate = namedParameterJdbcTemplate;
    }

    public List<Question> getAllQuestion(){
        String sql = "SELECT * FROM question";
        return namedParameterJdbcTemplate.query(sql, new QuestionMapper());
    }
}
