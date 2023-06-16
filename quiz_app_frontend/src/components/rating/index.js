import React, { useEffect, useState } from "react";
import API from "../../utils/axios";
import { Link } from "react-router-dom";
import "./styles.css";

const Rating = () => {

    const [rating, setRating] = useState([]);

    const getRating = async () => {
        await API.get("app/quiz/answerers")
        .then((resp) => {
            setRating(resp.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        getRating();
    }, [])

    return(
        <div className="body">
            <div className="container">
                <h1>Рейтинг користувачів</h1>
                {
                    rating.length === 0 ? <h3>Wait</h3> : <table>
                                                                <thead>
                                                                    <tr>
                                                                        <th>Місце</th>
                                                                        <th>Ім'я</th>
                                                                        <th>Бал</th>
                                                                        <th>Дата</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {rating.map((answerer, index) => (
                                                                        <tr key={index}>
                                                                            <td>{index + 1}</td>
                                                                            <td>{answerer.name}</td>
                                                                            <td>{answerer.total_score}</td>
                                                                            <td>{answerer.creation_date[0]}-{answerer.creation_date[1]}-{answerer.creation_date[2]}</td>
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                            </table>
                }
                <Link className="start-testing-button" to="/register">Розпочати тестування</Link>
            </div>
        </div>
    )
}

export default Rating;