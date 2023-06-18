import Rating from "./components/rating";
import QuizForm from "./components/quiz";
import ResultPage from "./components/result";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/privateRoute";
import RegisterForm from "./components/form";
import PageNotFound from "./components/not-found";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Rating}/>
      <Route path="" Component={PrivateRoute}>
        <Route path="/quiz" Component={QuizForm}/>
        <Route path="/result" Component={ResultPage}/>
      </Route>
      <Route path="/register" Component={RegisterForm}/>
      <Route path="/*" Component={PageNotFound}/>
    </Routes>
  );
}

export default App;
