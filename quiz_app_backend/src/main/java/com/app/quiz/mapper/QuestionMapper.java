package com.app.quiz.mapper;

import com.app.quiz.models.Question;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class QuestionMapper implements RowMapper<Question> {
    @Override
    public Question mapRow(ResultSet rs, int rowNum) throws SQLException {
        Question question = new Question();
        question.setId(rs.getLong("id"));
        question.setDescription(rs.getString("description"));
        List<String> optionList = new ArrayList<>();
        optionList.add(rs.getString("option_one"));
        optionList.add(rs.getString("option_two"));
        optionList.add(rs.getString("option_three"));
        optionList.add(rs.getString("option_four"));
        question.setOptions(optionList);
        question.setAnswer(rs.getInt("answer"));
        return question;
    }
}
