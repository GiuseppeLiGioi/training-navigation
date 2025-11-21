import React, { createContext, ReactNode, useContext, useState } from "react";

type NavigateContextType = {
  categoryId: number | null;
  setCategoryId: (id: number) => void;
};

const NavigateContext = createContext<NavigateContextType>({
  categoryId: null,
  setCategoryId: () => {},
});

export const NavigateProvider = ({ children }: { children: ReactNode }) => {
  const [categoryId, setCategoryId] = useState<number | null>(null);

  return (
    <NavigateContext.Provider value={{ categoryId, setCategoryId }}>
      {children}
    </NavigateContext.Provider>
  );
};

export const useNavigateContext = () => useContext(NavigateContext);
