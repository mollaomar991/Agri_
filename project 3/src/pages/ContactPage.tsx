import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        mobile: '',
        email: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="animate-fade-in">
      {/* Header Banner */}
      <div className="bg-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">যোগাযোগ করুন</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-primary-100">
            আমরা আপনার সাহায্য করতে সবসময় প্রস্তুত। আপনার যেকোনো প্রশ্ন বা মতামত আমাদের জানান।
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">আমাদের সাথে যোগাযোগ করুন</h2>
            <p className="text-gray-600 mb-8">
              আপনার যেকোনো প্রশ্ন বা সমস্যা সমাধানের জন্য আমাদের দক্ষ টিম সবসময় প্রস্তুত। আমাদের সাথে যোগাযোগ করার জন্য নিচের যেকোনো মাধ্যম ব্যবহার করতে পারেন।
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">ঠিকানা</h3>
                  <p className="text-gray-600">১২৩, কৃষি ভবন, ফার্মগেট, ঢাকা-১২১৫, বাংলাদেশ</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">ফোন</h3>
                  <p className="text-gray-600">+৮৮০ ১৭১২৩৪৫৬৭৮</p>
                  <p className="text-gray-600">+৮৮০ ১৮১২৩৪৫৬৭৮</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">ইমেইল</h3>
                  <p className="text-gray-600">info@smartagrichain.com.bd</p>
                  <p className="text-gray-600">help@smartagrichain.com.bd</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-lg font-medium text-gray-900 mb-4">কার্যালয়ের সময়</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">সোমবার - শুক্রবার: সকাল ৯টা - বিকাল ৫টা</p>
                <p className="text-gray-600">শনিবার: সকাল ১০টা - দুপুর ১টা</p>
                <p className="text-gray-600">রবিবার: বন্ধ</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">মেসেজ পাঠান</h2>
              
              {submitted ? (
                <div className="bg-green-50 text-green-700 p-4 rounded-md mb-6 flex items-center">
                  <Check className="h-5 w-5 mr-2" />
                  আপনার মেসেজ সফলভাবে পাঠানো হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    নাম
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="আপনার পূর্ণ নাম"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                    মোবাইল নম্বর
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="০১XXXXXXXXX"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    ইমেইল (ঐচ্ছিক)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="example@mail.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    মেসেজ
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="আপনার প্রশ্ন বা মতামত লিখুন..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      পাঠানো হচ্ছে...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      পাঠান
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">আমাদের অবস্থান</h2>
          <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <p className="text-gray-600">এখানে বাংলাদেশের মানচিত্র দেখানো হবে</p>
              <p className="text-sm text-gray-500">
                (নোট: প্রকৃত প্রোডাকশন অ্যাপে Google Maps বা অন্য মানচিত্র সেবা ব্যবহার করা হবে)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;