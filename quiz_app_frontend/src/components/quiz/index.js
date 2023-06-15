import "./styles.css";

const QuizForm = () => {
    return(
        <div className="body">
            <div className="container">
                <h1>Тест</h1>

                <form>
                    <div className="question">
                        <p>Питання 1: Питання?</p>
                        <label>
                            <input type="radio" name="question1" value="Варіант 1"/>
                            Варіант 1
                        </label>
                        <label>
                            <input type="radio" name="question1" value="Варіант 2"/>
                            Варіант 2
                        </label>
                        <label>
                            <input type="radio" name="question1" value="Варіант 3"/>
                            Варіант 3
                        </label>
                        <label>
                            <input type="radio" name="question1" value="Варіант 4"/>
                            Варіант 4
                        </label>
                    </div>
                    <div className="button-container">
                        <button type="submit">Завершити тест</button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default QuizForm;