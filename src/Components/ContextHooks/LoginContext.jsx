import React, { createContext, useContext ,useState} from 'react';

const LoginContext = createContext();

export const useLoginContext = () => useContext(LoginContext);

export const LoginContextProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false);
  return (
    <LoginContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </LoginContext.Provider>
  );
};
