"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { api, setAccessToken } from "@/lib/api-client";

interface User {
  id: string;
  email: string;
  created_at: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Check for active session on mount
  useEffect(() => {
    const initAuth = async () => {
      try {
        // Try to refresh token immediately to see if we have a valid session
        const { data } = await api.post("/auth/refresh");
        setAccessToken(data.access_token);

        // Fetch user profile
        const userResponse = await api.get("/auth/me");
        setUser(userResponse.data);
      } catch (error) {
        // Not authenticated
        console.log("No active session found");
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = async (email: string, password: string) => {
    const formData = new FormData();
    formData.append("username", email);
    formData.append("password", password);

    const { data } = await api.post("/auth/login", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    setAccessToken(data.access_token);
    setUser(data.user);
    router.push("/owner/restaurants"); // Redirect to owner restaurants after login
  };

  const signup = async (email: string, password: string) => {
    const { data } = await api.post("/auth/signup", {
      email,
      password_hash: password, // Backend expects password_hash field for raw password initially
    });

    setAccessToken(data.access_token);
    setUser(data.user);
    router.push("/owner/restaurants");
  };

  const logout = async () => {
    try {
      await api.post("/auth/logout");
    } catch (error) {
      console.error("Logout failed", error);
    } finally {
      setAccessToken(null);
      setUser(null);
      router.push("/login");
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
