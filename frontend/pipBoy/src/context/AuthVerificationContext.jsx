// AuthVerificationContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthVerificationContext = createContext();

export const AuthVerificationProvider = ({ children }) => {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <AuthVerificationContext.Provider value={{ isVerified, setIsVerified }}>
      {children}
    </AuthVerificationContext.Provider>
  );
};

export const useAuthVerification = () => useContext(AuthVerificationContext);