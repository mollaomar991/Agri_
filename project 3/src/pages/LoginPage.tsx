import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sprout } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const LoginPage: React.FC = () => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [showHint, setShowHint] = useState(false);
  const { login, error, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(mobile, password);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 animate-fade-in">
        <div className="text-center mb-8">
          <div className="flex justify-center">
            <Sprout className="h-12 w-12 text-primary-600" />
          </div>
          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            স্মার্ট কৃষি-চেইন সিস্টেম
          </h2>
          <p className="mt-2 text-gray-600">
            আপনার অ্যাকাউন্টে লগইন করুন
          </p>
          
          {showHint && (
            <div className="mt-2 p-2 bg-blue-50 rounded-md text-sm text-blue-800">
              ডেমো লগইন: মোবাইল নম্বর: ০১৭১২৩৪৫৬৭৮, পাসওয়ার্ড: password
            </div>
          )}
        </div>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 text-red-700 p-3 rounded-md text-sm">
              {error}
            </div>
          )}
          
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
              মোবাইল নম্বর
            </label>
            <input
              id="mobile"
              name="mobile"
              type="text"
              required
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="input-field"
              placeholder="০১XXXXXXXXX"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              পাসওয়ার্ড
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                আমাকে মনে রাখুন
              </label>
            </div>
            
            <button
              type="button"
              className="text-sm font-medium text-primary-600 hover:text-primary-500"
              onClick={() => alert('আপনার পাসওয়ার্ড পুনরুদ্ধারের জন্য আমাদের সাথে যোগাযোগ করুন')}
            >
              পাসওয়ার্ড ভুলে গিয়েছেন?
            </button>
          </div>
          
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary w-full flex justify-center items-center"
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : null}
              প্রবেশ করুন
            </button>
          </div>
        </form>
        
        <div className="mt-4 text-center">
          <button 
            onClick={() => setShowHint(!showHint)}
            className="text-sm text-gray-500 hover:text-primary-600"
          >
            {showHint ? 'হিন্ট লুকান' : 'ডেমো হিন্ট দেখুন'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;