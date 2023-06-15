import { Link } from "react-router-dom";
import "./styles.css";

const ResultPage = () => {
    return(
        <div className="body">
            <div className="container">
                <h1>Результати тестування</h1>

                <div className="result-container">
                    <p>Ім'я: <span className="user-name">Ім'я користувача</span></p>
                    <p>Набраний бал: <span className="user-score">0</span></p>
                </div>

                <h2>Список питань:</h2>
                <ul className="question-list">
                    <li className="correct">Питання 1. Яка країна є найбільшим виробником кави?</li>
                    <li className="incorrect">Питання 2. Яка країна має найбільшу площу в світі?</li>
                    <li className="correct">Питання 3. Яка країна є найбільшим експортером нафти?</li>
                </ul>

                <Link to={"/"} className="result-button">На головну</Link>
            </div>
        </div>
    )
}

export default ResultPage;