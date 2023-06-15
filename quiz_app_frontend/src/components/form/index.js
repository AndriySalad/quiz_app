
import "./styles.css";


const RegisterForm = () => {
    return(
        <div className="body">
            <div className="container">
                <h1>Введіть ім'я</h1>
                <form>
                    <label>Ім'я:</label>
                    <input type="text" id="name" name="name" placeholder="Введіть ваше ім'я" required/>
                    <button type="submit">Почати</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm;