import Rating from "./components/rating";
import RegisterForm from "./components/form";
import QuizForm from "./components/quiz";
import ResultPage from "./components/result";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Rating}/>
      <Route path="/register" Component={RegisterForm}/>
      <Route path="/quiz" Component={QuizForm}/>
      <Route path="/result" Component={ResultPage}/>
    </Routes>
  );
}

export default App;
