import React from 'react'
import { Navigate } from 'react-router-dom';
const ProtectedRoute = ({children}) => {

  const current_user = JSON.parse(localStorage.getItem("current_user"));

  if(!current_user)
  {
    return<Navigate to="/loginpage" />
  }

  return children
};

export default ProtectedRoute
