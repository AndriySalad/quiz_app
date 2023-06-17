import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import API from "../../utils/axios";
import "./styles.css";

const ResultPage = () => {
    const [result, setResult] = useState();
    const userId = localStorage.getItem("user");

    const getResult = async () => {
        try{
            const response = await API.get(`app/quiz/answers/${userId}`);
            setResult(response.data);
            console.log(result);
        }
        catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getResult();
    }, [])


    return(
        <div className="body">
            <div className="container">
                <h1>Результати тестування</h1>
                {
                    !result ? (<h3>Wait...</h3>) :
                    (
                        <>
                            <div className="result-container">
                                <p>Ім'я: <span className="user-name">{result.answerer.name}</span></p>
                                <p>Набраний бал: <span className="user-score">{result.answerer.total_score}</span></p>
                            </div>

                            <h2>Список питань:</h2>
                            <ul className="question-list">
                                {
                                    result.answers.map((answer, i) => (
                                        <li className={answer.correctness ? "correct" : "incorrect"}>Питання {i + 1}. {answer.questionDescription}</li>
                                    ))
                                }
                            </ul>
                        </>
                    )
                }
                

                <Link to={"/"} className="result-button">На головну</Link>
            </div>
        </div>
    )
}

export default ResultPage;