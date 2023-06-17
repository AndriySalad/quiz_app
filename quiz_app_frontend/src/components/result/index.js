import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import API from "../../utils/axios";
import "./styles.css";
import Spinner from "../spinner";

const ResultPage = () => {
    const [result, setResult] = useState();
    const [loading, setLoading] = useState(true);
    const userId = localStorage.getItem("user");

    const getResult = async () => {
        try{
            const response = await API.get(`app/quiz/answers/${userId}`);
            setResult(response.data);
            setLoading(false);
        }
        catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getResult();
        const disableBackNavigation = () => {
            window.history.pushState(null, document.title, window.location.href);
            window.addEventListener("popstate", disableBackNavigation);
        };
      
        disableBackNavigation();
      
        return () => {
            window.removeEventListener("popstate", disableBackNavigation);
        };
    }, [])


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