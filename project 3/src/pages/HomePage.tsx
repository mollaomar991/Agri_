import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, BarChart3, Leaf, Cloud, Shield } from 'lucide-react';

const HomePage: React.FC = () => {
  // Array of features with icons, titles, and descriptions
  const features = [
    {
      icon: <Leaf className="h-10 w-10 text-primary-600" />,
      title: 'ফসল ব্যবস্থাপনা',
      description: 'আপনার ফসলের সম্পূর্ণ চক্র ব্যবস্থাপনা করুন, বীজ থেকে বাজারজাতকরণ পর্যন্ত সবকিছু একটি মাত্র অ্যাপে।'
    },
    {
      icon: <Shield className="h-10 w-10 text-primary-600" />,
      title: 'রোগ সনাক্তকরণ',
      description: 'ফসলের রোগ আগে থেকেই সনাক্ত করুন এবং সঠিক প্রতিকার পান, ফলন বাড়িয়ে ক্ষতি কমান।'
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary-600" />,
      title: 'বিক্রয় ট্র্যাকিং',
      description: 'আপনার ফসলের বিক্রয় রেকর্ড রাখুন, বাজার দর নিরীক্ষণ করুন এবং আপনার লাভ বিশ্লেষণ করুন।'
    },
    {
      icon: <Cloud className="h-10 w-10 text-primary-600" />,
      title: 'আবহাওয়া পূর্বাভাস',
      description: 'স্থানীয় আবহাওয়া পূর্বাভাস দেখুন এবং আপনার কৃষি কার্যক্রম পরিকল্পনা করুন।'
    }
  ];

  // Testimonials from farmers
  const testimonials = [
    {
      quote: 'স্মার্ট কৃষি-চেইন ব্যবহার করে আমি আমার ফসলের উৎপাদন ৩০% বাড়াতে পেরেছি। এটি আমার জীবন বদলে দিয়েছে!',
      name: 'আব্দুল করিম',
      location: 'রংপুর',
      image: 'https://images.pexels.com/photos/2382424/pexels-photo-2382424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      quote: 'এই অ্যাপটি আমাকে ফসলের রোগ আগে থেকেই সনাক্ত করতে সাহায্য করেছে, যার ফলে আমি অনেক টাকা বাঁচাতে পেরেছি।',
      name: 'রহিমা বেগম',
      location: 'দিনাজপুর',
      image: 'https://images.pexels.com/photos/4993094/pexels-photo-4993094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              স্মার্ট কৃষি-চেইন সিস্টেম
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              কৃষকদের জন্য উন্নত প্রযুক্তি ব্যবহার করে ফসল ব্যবস্থাপনা, রোগ সনাক্তকরণ, এবং বিক্রয় সহায়তা প্রদানকারী ডিজিটাল সমাধান।
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/login" className="btn bg-white text-primary-700 hover:bg-gray-100 focus:ring-white">
                শুরু করুন
              </Link>
              <Link to="/contact" className="btn bg-transparent border-2 border-white hover:bg-white/10">
                আরও জানুন
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Sprout className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">আমাদের সেবাসমূহ</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              স্মার্ট কৃষি-চেইন কৃষকদের জন্য সম্পূর্ণ ডিজিটাল সমাধান প্রদান করে, যা কৃষি কার্যক্রমকে আরও সহজ ও লাভজনক করে তোলে।
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card hover:border-primary-500 hover:border transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">কৃষকদের অভিজ্ঞতা</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              দেখুন কিভাবে স্মার্ট কৃষি-চেইন বাংলাদেশের কৃষকদের সাহায্য করছে।
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <img
                      className="h-16 w-16 rounded-full object-cover"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                  </div>
                  <div>
                    <p className="text-gray-700 mb-4">{testimonial.quote}</p>
                    <div>
                      <p className="font-medium text-gray-900">{testimonial.name}</p>
                      <p className="text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">আজই স্মার্ট কৃষি-চেইন শুরু করুন</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            আপনার কৃষি ব্যবসা উন্নত করতে এবং আধুনিক প্রযুক্তির সুবিধা পেতে এখনই যোগ দিন।
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/login" className="btn bg-white text-primary-700 hover:bg-gray-100 focus:ring-white">
              রেজিস্ট্রেশন করুন
            </Link>
            <Link to="/contact" className="btn bg-transparent border-2 border-white hover:bg-white/10">
              যোগাযোগ করুন
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;