"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { showSuccess, showError } from "@/utils/toast";

interface AuthContextType {
  user: { id: string; email: string } | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ id: string; email: string } | null>(null);
  const navigate = useNavigate();

  // Placeholder for actual Supabase login
  const login = async (email: string, password: string) => {
    try {
      // In a real app, you'd call Supabase auth.signInWithPassword here
      console.log("Attempting login with:", email, password);
      // Simulate a successful login
      setUser({ id: "123", email });
      showSuccess("Logged in successfully!");
      navigate("/"); // Redirect to home page after login
    } catch (error) {
      showError("Login failed. Please check your credentials.");
      console.error("Login error:", error);
    }
  };

  // Placeholder for actual Supabase registration
  const register = async (email: string, password: string) => {
    try {
      // In a real app, you'd call Supabase auth.signUp here
      console.log("Attempting registration with:", email, password);
      // Simulate a successful registration and immediate login
      setUser({ id: "123", email });
      showSuccess("Registration successful! You are now logged in.");
      navigate("/"); // Redirect to home page after registration
    } catch (error) {
      showError("Registration failed. Please try again.");
      console.error("Registration error:", error);
    }
  };

  const logout = () => {
    setUser(null);
    showSuccess("Logged out successfully.");
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
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