import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Sprout, Brush as Virus, BarChart3, Calculator, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'হোম', path: '/', icon: <Home size={18} /> },
    { name: 'ফসল ব্যবস্থাপনা', path: '/crop-management', icon: <Sprout size={18} /> },
    { name: 'রোগ সনাক্তকরণ', path: '/disease-detection', icon: <Virus size={18} /> },
    { name: 'বিক্রয় প্রতিবেদন', path: '/sales-report', icon: <BarChart3 size={18} /> },
    { name: 'খরচ ও ভর্তুকি', path: '/expenses', icon: <Calculator size={18} /> },
    { name: 'যোগাযোগ করুন', path: '/contact', icon: null },
  ];

  const isActive = (path: string) => {
    return location.pathname === path ? 'nav-link-active' : '';
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Sprout className="h-8 w-8 text-primary-600" />
              <span className="ml-2 font-bengali font-bold text-xl text-primary-800">স্মার্ট কৃষি-চেইন</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link flex items-center ${isActive(link.path)}`}
                onClick={closeMenu}
              >
                {link.icon && <span className="mr-1">{link.icon}</span>}
                {link.name}
              </Link>
            ))}
            
            {isAuthenticated && (
              <button 
                onClick={logout}
                className="nav-link flex items-center text-red-600 hover:bg-red-50"
              >
                <LogOut size={18} className="mr-1" />
                লগআউট
              </button>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden animate-fade-in bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link block flex items-center ${isActive(link.path)}`}
                onClick={closeMenu}
              >
                {link.icon && <span className="mr-2">{link.icon}</span>}
                {link.name}
              </Link>
            ))}
            
            {isAuthenticated && (
              <button 
                onClick={() => {
                  logout();
                  closeMenu();
                }}
                className="nav-link block w-full text-left flex items-center text-red-600 hover:bg-red-50"
              >
                <LogOut size={18} className="mr-2" />
                লগআউট
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;