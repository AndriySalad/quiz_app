import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../utils/axios";
import "./styles.css";

const QuizForm = () => {
  const [questionList, setQuestionList] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const answererId = localStorage.getItem("user");
  const navigate = useNavigate();
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

  const handleOptionChange = (selectedOption) => {
    const updatedAnswers = [...answers];
    const currentQuestionId = questionList[currentQuestionIndex].id;
    const existingAnswerIndex = updatedAnswers.findIndex(
      (answer) => answer.questionId === currentQuestionId
    );

    if (existingAnswerIndex !== -1) {
      updatedAnswers[existingAnswerIndex].option = selectedOption;
    } else {
      updatedAnswers.push({ questionId: currentQuestionId, option: selectedOption });
    }

    setAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const updatedAnswers = [...answers];
    questionList.forEach((question) => {
      const existingAnswerIndex = updatedAnswers.findIndex(
        (answer) => answer.questionId === question.id
      );
      if (existingAnswerIndex === -1) {
        updatedAnswers.push({ questionId: question.id, option: 0 });
      }
    });

    setAnswers(updatedAnswers);

    const data = {
      answererId,
      answers: updatedAnswers,
    };

    try {
      const resp = await API.post("app/quiz/answers", data);
      console.log(resp);
      if (resp) {
        navigate("/result");
      }
    } catch (err) {
      console.log("Something went wrong...", err);
    }
  };

  if (questionList.length === 0) {
    return <h3>Wait...</h3>;
  }

  const currentQuestion = questionList[currentQuestionIndex];

  return (
    <div className="body">
      <div className="container">
        <h1>Тест</h1>

        <form onSubmit={handleSubmit}>
          <div className="question" key={currentQuestion.id}>
            <p>
              Питання {currentQuestion.id}: {currentQuestion.description}
            </p>
            {currentQuestion.options.map((option, i) => (
              <label key={i + 1}>
                <input
                  type="radio"
                  name={`question${currentQuestion.id}`}
                  value={option}
                  id={i + currentQuestion.id}
                  onChange={() => handleOptionChange(i + 1)}
                />
                {option}
              </label>
            ))}
          </div>

          <div className="button-container">
            <button type="button" onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
              Попереднє питання
            </button>
            <button type="button" onClick={handleNextQuestion} disabled={currentQuestionIndex === questionList.length - 1}>
              Наступне питання
            </button>
            {currentQuestionIndex === questionList.length - 1 && (
              <button type="submit">Завершити тест</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuizForm;
