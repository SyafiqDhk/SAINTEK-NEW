import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AuthContextProps {
  isAdmin: boolean;
  setIsAdmin: (value: boolean) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAdmin(true);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ isAdmin, setIsAdmin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
