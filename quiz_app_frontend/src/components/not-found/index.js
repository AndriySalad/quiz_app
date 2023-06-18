import "./not-found.css";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div classNmae="body">
            <div class="container">
                <h1>404 - Сторінку не знайдено</h1>
                <p>Вибачте, але сторінку, яку ви шукаєте, не знайдено.</p>
                <p><Link to="/">Повернутися на головну сторінку</Link></p>
            </div>
        </div>
    )
}

export default PageNotFound;