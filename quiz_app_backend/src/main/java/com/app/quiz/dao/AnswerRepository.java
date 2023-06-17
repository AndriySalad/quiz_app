package com.app.quiz.dao;

import com.app.quiz.dto.ResultAnswer;
import com.app.quiz.mapper.AnswerMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class AnswerRepository {

    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public AnswerRepository(NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
        this.namedParameterJdbcTemplate = namedParameterJdbcTemplate;
    }

    public void saveAnswers(Long answererId, Long questionId, int answer, boolean correctness){
        String sql = "INSERT INTO answers (answerer_id, question_id, answer, correct)" +
                "VALUES (:answerer_id, :question_id, :answer, :correct);";
        SqlParameterSource parameterSource = new MapSqlParameterSource()
                .addValue("answerer_id", answererId)
                .addValue("question_id", questionId)
                .addValue("answer", answer)
                .addValue("correct", correctness);
        namedParameterJdbcTemplate.update(sql, parameterSource);
    }

    public List<ResultAnswer> getAnswersByUserId(Long answererId) {
        String sql = "SELECT q.description, a.correct " +
                "FROM question q " +
                "JOIN answers a ON q.id = a.question_id " +
                "WHERE a.answerer_id = :answererId;";
        SqlParameterSource parameterSource = new MapSqlParameterSource("answererId", answererId);
        return namedParameterJdbcTemplate.query(sql, parameterSource, new AnswerMapper());
    }
}
