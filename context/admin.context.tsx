'use client';

import React, { useContext, useReducer } from 'react';

import adminReducer from '../reducers/user.reducer';

const initialState = {
  userIsInactive: true,
};
const AdminContext = React.createContext(initialState);

const AdminProvider = ({ children }) => {
  const [state, dispatch] = useReducer(adminReducer, initialState);

  const login = () => {
    dispatch({ type: 'SUCCESSFUL_LOGIN' });
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT_SUCCESSFUL' });
  };

  return (
    <AdminContext.Provider
      value={{
        ...state,
        login,
        logout,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
// make sure use
const useAdminGlobalContext = () => {
  return useContext(AdminContext);
};

export { AdminContext, AdminProvider, useAdminGlobalContext };
