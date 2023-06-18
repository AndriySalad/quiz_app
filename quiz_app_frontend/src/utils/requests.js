import API from "./axios.js";

export const getRating = async (setList, setLoader) => {
    try {
        const resp = await API.get("app/quiz/answerers");
        setList(resp.data);
        setLoader(false);
    } catch (err) {
        console.log(err);
    }
};

export const getResult = async (setResult, userId, setLoader) => {
    try{
        const response = await API.get(`app/quiz/answers/${userId}`);
        setResult(response.data);
        setLoader(false);
    }
    catch(err) {
        console.log(err);
    }
}

export const getQuestions = async (setQuestions, setLoader) => {
    try {
        const resp = await API.get("app/quiz/questions");
        setQuestions(resp.data);
        setLoader(false);
    } catch (err) {
        console.log(err);
    }
};