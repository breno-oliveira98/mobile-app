import React, { createContext, useContext, useState } from 'react';

// Criação do contexto
const VisibilityContext = createContext();

// Componente Provider
export const VisibilityProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <VisibilityContext.Provider value={{ isVisible, toggleVisibility }}>
      {children}
    </VisibilityContext.Provider>
  );
};

// Hook personalizado para consumir o contexto
export const useVisibility = () => {
  return useContext(VisibilityContext);
};
