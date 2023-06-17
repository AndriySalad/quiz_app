import React, { useEffect, useState } from "react";
import API from "../../utils/axios";
import { Link } from "react-router-dom";
import "./styles.css";
import Spinner from "../spinner";

const Rating = () => {
    const [rating, setRating] = useState([]);
    const [loading, setLoading] = useState(true);

    const getRating = async () => {
        try {
            const resp = await API.get("app/quiz/answerers");
            setRating(resp.data);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        localStorage.clear();
        getRating();
        const disableBackNavigation = () => {
            window.history.pushState(null, document.title, window.location.href);
            window.addEventListener("popstate", disableBackNavigation);
        };
      
        disableBackNavigation();
      
        return () => {
            window.removeEventListener("popstate", disableBackNavigation);
        };
    }, []);

    return (
        <div className="body">
            <div className="container">
                <h1 className="center">Рейтинг користувачів</h1>
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
                        {loading ? (
                        <tr>
                            <td colSpan="4" className="center">
                                <Spinner />
                            </td>
                        </tr>
                        ) : rating.length === 0 ? (
                        <tr>
                            <td colSpan="4" className="center">
                                Наразі ще ніхто не проходив тест
                            </td>
                        </tr>
                        ) : (
                        rating.map((answerer, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{answerer.name}</td>
                                <td>{answerer.total_score}</td>
                                <td>{`${answerer.creation_date[0]}-${answerer.creation_date[1]}-${answerer.creation_date[2]}`}</td>
                            </tr>
                        ))
                        )}
                    </tbody>
                </table>
                <Link className="start-testing-button" to="/register">Розпочати тестування</Link>
            </div>
        </div>
    );
};

export default Rating;
