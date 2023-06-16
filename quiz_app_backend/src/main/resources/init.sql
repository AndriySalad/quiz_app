CREATE TABLE answerer (
    id              BIGSERIAL       PRIMARY KEY,
    user_name       TEXT            NOT NULL,
    created         TIMESTAMP       DEFAULT now()
);

CREATE TABLE question (
    id              BIGSERIAL       PRIMARY KEY,
    description     TEXT            NOT NULL,
    option_one       TEXT            NOT NULL,
    option_two       TEXT            NOT NULL,
    option_three     TEXT            NOT NULL,
    option_four      TEXT            NOT NULL,
    answer          INT             NOT NULL
);

CREATE TABLE answers (
    answerer_id     BIGINT       REFERENCES answerer(id)     NOT NULL,
    question_id     BIGINT       REFERENCES question(id)     NOT NULL,
    answer          INT,
    correct         BOOLEAN
);