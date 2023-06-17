import {Navigate, Outlet} from "react-router-dom";

const PrivateRoute = () => {
    const auth = localStorage.getItem("registered");
    return (
        auth ? <Outlet /> : <Navigate to="/register" />
    );
};

export default PrivateRoute;