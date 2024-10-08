import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { lookInSession } from './sessions';

const ProtectedRoute = ({ children }) => {
  const access_token = lookInSession('token');

  if (!access_token) {
    return <Navigate to="/admin-login" replace />;
  }

  return children;
};

export default ProtectedRoute;
