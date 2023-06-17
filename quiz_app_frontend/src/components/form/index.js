
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import API from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import Spinner from "../spinner";

const RegisterForm = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Ім'я є обов'язковим полем"),
    });

    const formik = useFormik({
        initialValues: {
        name: "",
        },
        validationSchema,
        onSubmit: async (values) => {
            setLoading(true);
            await API.post("app/quiz/answerer", values)
            .then((resp) => {
                localStorage.setItem("user", resp.data);
                localStorage.setItem("registered", true)
            }).finally(() => {
                navigate("/quiz");
            });
        },
    });

    const hasError = (field) =>
        formik.touched[field] && formik.errors[field] ? "error" : "";

    return (
        <div className="body">
        <div className="container">
            {!loading ? 
            (
                <>
                    <h1>Введіть ім'я</h1>
                    <form onSubmit={formik.handleSubmit}>
                        <label htmlFor="name">Ім'я:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={hasError("name")}
                            placeholder="Введіть ваше ім'я"
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <div className="error">{formik.errors.name}</div>
                        ) : null}

                        <button type="submit">Почати</button>
                    </form> 
                </>
            )
            : 
            (<Spinner/>)}
            
        </div>
        </div>
    );
};

export default RegisterForm;
