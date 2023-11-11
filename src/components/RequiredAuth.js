import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
       
           
            auth?.user
            ? <Outlet />
               
                :<Navigate to="/login" state={{ from: window.location.pathname }} replace />

    );
}

export default RequireAuth;