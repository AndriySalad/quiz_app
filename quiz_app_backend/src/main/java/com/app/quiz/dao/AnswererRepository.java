package com.app.quiz.dao;

import com.app.quiz.dto.AnswererDto;
import com.app.quiz.mapper.AnswererMapper;
import com.app.quiz.models.Answerer;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class AnswererRepository {
    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public AnswererRepository(NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
        this.namedParameterJdbcTemplate = namedParameterJdbcTemplate;
    }

    public List<Answerer> getAllAnswerer(){
        String sql = "SELECT a.id, a.user_name, COUNT(*) FILTER (WHERE ans.correct = true) AS score, a.created " +
                "FROM answerer AS a " +
                "LEFT JOIN answers AS ans ON a.id = ans.answerer_id\n" +
                "GROUP BY a.id " +
                "ORDER BY score DESC;";
        return namedParameterJdbcTemplate.query(sql, new AnswererMapper());
    }

    public Long createAnswerer(AnswererDto answererDto){
        String sql = "INSERT INTO answerer (user_name) \n" +
                     "VALUES (:user_name) RETURNING ID;";
        SqlParameterSource parameterSource = new MapSqlParameterSource()
                .addValue("user_name", answererDto.getName());

        return namedParameterJdbcTemplate.queryForObject(sql, parameterSource, Long.class);
    }

    public Answerer getAnswererById(Long id){
        String sql = "SELECT * FROM answerer WHERE answerer.id = :id;";
        SqlParameterSource parameterSource = new MapSqlParameterSource("id", id);
        return namedParameterJdbcTemplate.queryForObject(sql, parameterSource, new AnswererMapper());
    }
}
