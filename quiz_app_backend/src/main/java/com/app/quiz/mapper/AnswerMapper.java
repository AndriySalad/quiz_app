package com.app.quiz.mapper;

import com.app.quiz.dto.ResultAnswer;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class AnswerMapper implements RowMapper<ResultAnswer> {

    @Override
    public ResultAnswer mapRow(ResultSet rs, int rowNum) throws SQLException {
        ResultAnswer answer = new ResultAnswer();
        answer.setQuestionDescription(rs.getString("description"));
        answer.setCorrectness(rs.getBoolean("correct"));
        return answer;
    }
}
