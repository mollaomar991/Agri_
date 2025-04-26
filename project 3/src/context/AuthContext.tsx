import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types/types';

interface AuthContextType {
  currentUser: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (mobile: string, password: string) => Promise<void>;
  logout: () => void;
  error: string | null;
}

const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => {},
  logout: () => {},
  error: null,
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check for saved user in localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  // Mock login function (would connect to an API in a real app)
  const login = async (mobile: string, password: string) => {
    setError(null);
    setIsLoading(true);
    
    try {
      // In a real app, this would be an API call
      if (mobile === '01712345678' && password === 'password') {
        const user: User = {
          id: '1',
          name: 'আব্দুল করিম',
          mobile: mobile,
          location: 'রংপুর, বাংলাদেশ',
          profileImage: 'https://images.pexels.com/photos/2382424/pexels-photo-2382424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        };
        
        setCurrentUser(user);
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        throw new Error('অবৈধ মোবাইল নম্বর বা পাসওয়ার্ড');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'লগইন ব্যর্থ হয়েছে');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    currentUser,
    isAuthenticated: !!currentUser,
    isLoading,
    login,
    logout,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};