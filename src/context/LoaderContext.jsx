import { createContext, useContext, useState } from "react";

// 1. Context create
const LoaderContext = createContext();

// 2. Provider component
export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};

// 3. Custom hook
export const useLoader = () => useContext(LoaderContext);
