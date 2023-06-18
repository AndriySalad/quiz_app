import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles.css";
import { getResult } from "../../utils/requests";
import Spinner from "../spinner";
import { disableBackNavigation } from "../../utils/disableBackNavigation";

const ResultPage = () => {
    const [result, setResult] = useState();
    const [loading, setLoading] = useState(true);
    const userId = localStorage.getItem("user");

    useEffect(() => {
        getResult(setResult, userId, setLoading);      
        disableBackNavigation();
    }, [userId])

    return(
        <div className="body">
            <div className="container">
                <h1>Результати тестування</h1>
                {
                    loading ? (<Spinner/>) : !result ? 
                    (<h3>Something went wrong...</h3>)  :
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
                                        <li className={answer.correctness ? "correct" : "incorrect"} key={i + 1}> Питання {i + 1}. {answer.questionDescription}</li>
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