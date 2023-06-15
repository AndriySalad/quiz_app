import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Rating = () => {
    return(
        <div className="body">
            <div className="container">
                <h1>Рейтинг користувачів</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Місце</th>
                            <th>Ім'я</th>
                            <th>Бал</th>
                            <th>Дата</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Іван</td>
                            <td>13</td>
                            <td>2023-06-10</td>
                        </tr>
                    </tbody>
                </table>
                <Link className="start-testing-button" to="/register">Розпочати тестування</Link>
            </div>
        </div>
    )
}

export default Rating;