import React, { createContext, useContext ,useState} from 'react';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  const updateUserId = (id) => {
    setUserId(id);
  }
  return (
    <UserContext.Provider value={{ userId, setUserId, updateUserId }}>
      {children}
    </UserContext.Provider>
  );
};
