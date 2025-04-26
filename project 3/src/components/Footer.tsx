import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info */}
          <div>
            <h2 className="font-bold text-xl mb-4">স্মার্ট কৃষি-চেইন সিস্টেম</h2>
            <p className="text-gray-200 mb-4">
              কৃষকদের জন্য উন্নত প্রযুক্তি, ফসল ব্যবস্থাপনা, রোগ সনাক্তকরণ, এবং বিক্রয় সহায়তা
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-accent-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent-300 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h2 className="font-bold text-xl mb-4">দ্রুত লিঙ্ক</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-200 hover:text-white transition-colors">হোম</Link>
              </li>
              <li>
                <Link to="/crop-management" className="text-gray-200 hover:text-white transition-colors">ফসল ব্যবস্থাপনা</Link>
              </li>
              <li>
                <Link to="/disease-detection" className="text-gray-200 hover:text-white transition-colors">রোগ সনাক্তকরণ</Link>
              </li>
              <li>
                <Link to="/sales-report" className="text-gray-200 hover:text-white transition-colors">বিক্রয় প্রতিবেদন</Link>
              </li>
              <li>
                <Link to="/expenses" className="text-gray-200 hover:text-white transition-colors">খরচ ও ভর্তুকি</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-200 hover:text-white transition-colors">যোগাযোগ করুন</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h2 className="font-bold text-xl mb-4">যোগাযোগ করুন</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mt-1 mr-2 flex-shrink-0" size={18} />
                <span>১২৩, কৃষি ভবন, ফার্মগেট, ঢাকা-১২১৫, বাংলাদেশ</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 flex-shrink-0" size={18} />
                <span>০১৭১২৩৪৫৬৭৮</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 flex-shrink-0" size={18} />
                <span>info@smartagrichain.com.bd</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-700 mt-8 pt-8 text-center text-gray-300">
          <p>© {new Date().getFullYear()} স্মার্ট কৃষি-চেইন সিস্টেম। সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;