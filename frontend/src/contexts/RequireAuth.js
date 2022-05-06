import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../App";
import { useContext } from "react";

//RequireAuth context var to check if user is logged in  NOT WORKING
export const RequireAuth = ({children}) => {
    const location = useLocation()
    const { auth } = useContext(UserContext);
    if(auth === false) {
      return <Navigate to="/auth/login" state={{from: location}} replace />
    }
    return children
}