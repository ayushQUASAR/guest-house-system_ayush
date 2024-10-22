import React, { createContext, useContext ,useState} from 'react';

const LoginContext = createContext();

export const useLoginContext = () => useContext(LoginContext);

export const LoginContextProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false);
    const [isAdm, setIsAdm] = useState(false);
  return (
    <LoginContext.Provider value={{ isLogged, setIsLogged, isAdm, setIsAdm }}>
      {children}
    </LoginContext.Provider>
  );
};
