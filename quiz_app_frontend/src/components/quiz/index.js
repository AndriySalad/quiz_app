import { useState, useEffect } from "react";
import API from "../../utils/axios";
import "./styles.css";

const QuizForm = () => {
    const [questionList, setQuestionList] = useState([]);
    const [answers, setAnswers] = useState([]);

    const getQuestions = async () => {
        try {
            const resp = await API.get("app/quiz/questions");
            setQuestionList(resp.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getQuestions();
    }, []);

    const handleOptionChange = (questionId, selectedOption) => {
        const updatedAnswers = [...answers];
        const existingAnswerIndex = updatedAnswers.findIndex(
            (answer) => answer.question_id === questionId
        );
    
        if (existingAnswerIndex !== -1) {
            updatedAnswers[existingAnswerIndex].answer = selectedOption;
        } 
        else {
            updatedAnswers.push({ question_id: questionId, option: selectedOption });
        }
    
        setAnswers(updatedAnswers);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
    
        const updatedAnswers = [...answers];
        questionList.forEach((question) => {
            const existingAnswerIndex = updatedAnswers.findIndex(
                (answer) => answer.question_id === question.id
            );
            if (existingAnswerIndex === -1) {
                updatedAnswers.push({ question_id: question.id, option: 0 });
            }
        });
    
        console.log(updatedAnswers);
    };
    

    return (
        <div className="body">
            <div className="container">
                <h1>Тест</h1>

                <form onSubmit={handleSubmit}>
                    {
                        questionList.length === 0 ? 
                        (
                            <h3>Wait...</h3>
                        ) : 
                        (
                            questionList.map((question) => (
                                <div className="question" key={question.id}>
                                    <p>
                                        Питання {question.id}: {question.description}
                                    </p>
                                    {
                                    question.options.map((option, i) => (
                                        <label key={i + 1}>
                                            <input
                                                type="radio"
                                                name={`question${question.id}`}
                                                value={option}
                                                id={i + question.id}
                                                onChange={() => handleOptionChange(question.id, i + 1)}
                                            />
                                            {option}
                                        </label>
                                    ))}
                                </div>
                            ))
                    )}

                    <div className="button-container">
                        <button type="submit">Завершити тест</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default QuizForm;
