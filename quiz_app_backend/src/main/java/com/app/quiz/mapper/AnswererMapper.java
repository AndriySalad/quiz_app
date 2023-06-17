package com.app.quiz.mapper;

import com.app.quiz.models.Answerer;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class AnswererMapper implements RowMapper<Answerer> {

    @Override
    public Answerer mapRow(ResultSet rs, int rowNum) throws SQLException {
        Answerer answerer = new Answerer();
        answerer.setId(rs.getLong("id"));
        answerer.setName(rs.getString("user_name"));
        answerer.setTotal_score(rs.getLong("score"));
        answerer.setCreation_date(rs.getTimestamp("created").toLocalDateTime());
        return answerer;
    }
}
