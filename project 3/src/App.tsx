import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ContactPage from './pages/ContactPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen font-bengali">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <DashboardPage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/crop-management" 
                element={
                  <ProtectedRoute>
                    <div className="py-12 px-4 sm:px-6 lg:px-8 text-center">
                      <h1 className="text-2xl font-bold mb-4">ফসল ব্যবস্থাপনা</h1>
                      <p>এই পৃষ্ঠাটি নির্মাণাধীন আছে।</p>
                    </div>
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/disease-detection" 
                element={
                  <ProtectedRoute>
                    <div className="py-12 px-4 sm:px-6 lg:px-8 text-center">
                      <h1 className="text-2xl font-bold mb-4">রোগ সনাক্তকরণ</h1>
                      <p>এই পৃষ্ঠাটি নির্মাণাধীন আছে।</p>
                    </div>
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/sales-report" 
                element={
                  <ProtectedRoute>
                    <div className="py-12 px-4 sm:px-6 lg:px-8 text-center">
                      <h1 className="text-2xl font-bold mb-4">বিক্রয় প্রতিবেদন</h1>
                      <p>এই পৃষ্ঠাটি নির্মাণাধীন আছে।</p>
                    </div>
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/expenses" 
                element={
                  <ProtectedRoute>
                    <div className="py-12 px-4 sm:px-6 lg:px-8 text-center">
                      <h1 className="text-2xl font-bold mb-4">খরচ ও ভর্তুকি</h1>
                      <p>এই পৃষ্ঠাটি নির্মাণাধীন আছে।</p>
                    </div>
                  </ProtectedRoute>
                } 
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;