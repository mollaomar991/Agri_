import React from 'react';

interface PlaceholderPageProps {
  title: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <div className="bg-gray-100 p-8 rounded-lg shadow-inner">
        <p className="text-gray-700 mb-4">এই পৃষ্ঠাটি বর্তমানে নির্মাণাধীন আছে।</p>
        <p className="text-gray-500 text-sm">এটি শীঘ্রই উপলব্ধ হবে। আপনার ধৈর্যের জন্য ধন্যবাদ।</p>
      </div>
    </div>
  );
};

export default PlaceholderPage;