import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children, path}) => {
    const isAuth = localStorage.getItem('token');
    
    if(path === '/login'){
        return isAuth ?  <Navigate to='/' replace /> : children;
    };

    return isAuth ? children : <Navigate to='/login' replace />;
};

export default PrivateRoute;
