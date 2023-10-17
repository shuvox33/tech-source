import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>
        
    }
    if(user){
        return children;
    }
    return <Navigate to={'/signup'}></Navigate>;
};

PrivateRoutes.propTypes = {
    children : PropTypes.object.isRequired
}

export default PrivateRoutes;