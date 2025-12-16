import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const AuthRoute = ({ children }) => {
  const location = useLocation();
  const { admin } = useSelector((state) => state.adminInfo);

  if (admin === null) {
    return <p>Checking authentication...</p>;
  }

  if (admin?.id) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace />;
};

export default AuthRoute;




// import React from 'react'
// import { useSelector } from 'react-redux';
// import { Navigate, useLocation } from 'react-router-dom'

// const AuthRoute = ({children}) => {
//     const location = useLocation();
//     const {admin} = useSelector((state)=> state.adminInfo)
//     const isAuth = admin?.id;
//   return isAuth ? children : <Navigate state={{from:location.pathname}} to='/'/>
// }

// export default AuthRoute