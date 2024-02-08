import { useContext } from "react";
import { NewsContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(NewsContext);
    const location = useLocation();
    console.log(location);

    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <span className="loading loading-spinner w-20"></span>
        </div>;
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>;
};

export default PrivateRoute;


PrivateRoute.propTypes = {
    children: PropTypes.node
}