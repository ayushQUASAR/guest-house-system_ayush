import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const updateUserId = (id) => {
    if(id!==undefined) {
    sessionStorage.setItem('userId', id);
    setUserId(id);
    }
  }
  useEffect(() => {
    const storedUserId = sessionStorage.getItem('userId');
    if (storedUserId){
      setUserId(storedUserId);
    }
  }, []);
  return (
    <UserContext.Provider value={{ userId, setUserId, updateUserId }}>
      {children}
    </UserContext.Provider>
  );
};
