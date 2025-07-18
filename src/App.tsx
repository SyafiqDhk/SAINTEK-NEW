import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext, useContext } from "react";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import LecturePage from "./components/LecturePage";
import CashflowPage from "./components/CashflowPage";
import ContactPage from "./components/ContactPage";
import AdminLogin from "./components/admin/AdminLogin";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminLectures from "./components/admin/AdminLectures";
import AdminCashflow from "./components/admin/AdminCashflow";
import Navbar from "./components/Navbar";
import { Toaster } from "@/components/ui/toaster";

// Auth Context
interface AuthContextType {
  isAdmin: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  const login = (username: string, password: string): boolean => {
    if (username === "admin" && password === "admin123") {
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout }}>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/lectures" element={<LecturePage />} />
            <Route path="/cashflow" element={<CashflowPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/lectures" element={<AdminLectures />} />
            <Route path="/admin/cashflow" element={<AdminCashflow />} />
          </Routes>
          <Toaster />
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
