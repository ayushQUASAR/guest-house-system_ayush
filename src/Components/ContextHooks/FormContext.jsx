/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});

  const updateFormData = (name, value) => {
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};