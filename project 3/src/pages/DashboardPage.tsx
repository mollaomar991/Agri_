import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Cloud, CloudRain, Wind, Droplet, Calendar, Check, AlertTriangle, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { CropStatus, DiseaseAlert, WeatherInfo, Sale } from '../types/types';

const DashboardPage: React.FC = () => {
  const { currentUser } = useAuth();
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo | null>(null);
  const [crops, setCrops] = useState<CropStatus[]>([]);
  const [alerts, setAlerts] = useState<DiseaseAlert[]>([]);
  const [recentSales, setRecentSales] = useState<Sale[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API calls to fetch data
    setTimeout(() => {
      // Mock data
      setWeatherInfo({
        temperature: 28,
        condition: 'সূর্যোজ্জ্বল',
        humidity: 75,
        rainfall: 0,
        forecast: [
          { day: 'আজ', temperature: 28, condition: 'sunny' },
          { day: 'আগামীকাল', temperature: 29, condition: 'partly-cloudy' },
          { day: 'পরশু', temperature: 27, condition: 'rain' },
        ],
      });

      setCrops([
        {
          id: '1',
          name: 'ধান',
          status: 'good',
          plantedDate: '২০২৫-০১-১৫',
          estimatedHarvest: '২০২৫-০৫-১৫',
          healthPercentage: 85,
        },
        {
          id: '2',
          name: 'আলু',
          status: 'warning',
          plantedDate: '২০২৫-০২-২০',
          estimatedHarvest: '২০২৫-০৫-২৫',
          healthPercentage: 65,
        },
        {
          id: '3',
          name: 'গম',
          status: 'good',
          plantedDate: '২০২৫-০১-১০',
          estimatedHarvest: '২০২৫-০৪-৩০',
          healthPercentage: 90,
        },
      ]);

      setAlerts([
        {
          id: '1',
          cropId: '2',
          cropName: 'আলু',
          diseaseName: 'আলুর আগাম মরা রোগ',
          severity: 'medium',
          detectedDate: '২০২৫-০৩-১০',
          recommendations: 'সঠিক ছত্রাকনাশক প্রয়োগ করুন এবং সেচ নিয়ন্ত্রণ করুন।',
        },
      ]);

      setRecentSales([
        {
          id: '1',
          cropName: 'ধান',
          quantity: 500,
          price: 25000,
          date: '২০২৫-০২-২৮',
          buyer: 'রাজশাহী হোলসেল মার্কেট',
        },
        {
          id: '2',
          cropName: 'গম',
          quantity: 300,
          price: 18000,
          date: '২০২৫-০৩-০৫',
          buyer: 'ঢাকা কৃষি বাজার',
        },
      ]);

      setIsLoading(false);
    }, 1000);
  }, []);

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny':
        return <Sun className="h-8 w-8 text-accent-500" />;
      case 'partly-cloudy':
        return <Cloud className="h-8 w-8 text-gray-500" />;
      case 'rain':
        return <CloudRain className="h-8 w-8 text-primary-500" />;
      default:
        return <Sun className="h-8 w-8 text-accent-500" />;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good':
        return <Check className="h-5 w-5 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-amber-500" />;
      case 'danger':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Check className="h-5 w-5 text-green-500" />;
    }
  };

  const getSeverityClass = (severity: string) => {
    switch (severity) {
      case 'low':
        return 'bg-amber-100 text-amber-800';
      case 'medium':
        return 'bg-orange-100 text-orange-800';
      case 'high':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">লোড হচ্ছে...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      {/* Welcome Section */}
      <div className="bg-primary-600 text-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">
              স্বাগতম, {currentUser?.name || 'কৃষক'}!
            </h1>
            <p className="text-primary-100">
              আপনার কৃষি ব্যবস্থাপনা ড্যাশবোর্ডে স্বাগতম। আজ {new Date().toLocaleDateString('bn-BD')}
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link 
              to="/crop-management" 
              className="btn bg-white text-primary-700 hover:bg-gray-100 focus:ring-white"
            >
              ফসল ব্যবস্থাপনা
            </Link>
          </div>
        </div>
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Weather Section */}
        <div className="card">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Cloud className="mr-2 text-primary-600" size={20} />
            আজকের আবহাওয়া
          </h2>
          
          {weatherInfo && (
            <>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-3xl font-bold">{weatherInfo.temperature}°C</p>
                  <p className="text-gray-600">{weatherInfo.condition}</p>
                </div>
                {getWeatherIcon(weatherInfo.forecast[0].condition)}
              </div>
              
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="flex items-center">
                  <Droplet size={16} className="text-primary-500 mr-2" />
                  <span className="text-gray-600">আর্দ্রতা: {weatherInfo.humidity}%</span>
                </div>
                <div className="flex items-center">
                  <Wind size={16} className="text-gray-500 mr-2" />
                  <span className="text-gray-600">বৃষ্টিপাত: {weatherInfo.rainfall} মিমি</span>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <h3 className="font-medium mb-2">পরবর্তী দিনগুলির পূর্বাভাস:</h3>
                <div className="grid grid-cols-3 gap-2">
                  {weatherInfo.forecast.map((day, idx) => (
                    <div key={idx} className="text-center p-2 rounded-md bg-gray-50">
                      <p className="font-medium">{day.day}</p>
                      {getWeatherIcon(day.condition)}
                      <p>{day.temperature}°C</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Crop Status */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold flex items-center">
              <Sprout className="mr-2 text-primary-600" size={20} />
              ফসলের অবস্থা
            </h2>
            <Link 
              to="/crop-management" 
              className="text-sm text-primary-600 hover:text-primary-700"
            >
              সব দেখুন
            </Link>
          </div>
          
          <div className="space-y-4">
            {crops.map((crop) => (
              <div key={crop.id} className="border rounded-md p-3 hover:shadow-sm transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium flex items-center">
                    {getStatusIcon(crop.status)}
                    <span className="ml-2">{crop.name}</span>
                  </h3>
                  <span className="text-sm text-gray-500">
                    <Calendar size={14} className="inline mr-1" />
                    {crop.estimatedHarvest}
                  </span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full ${
                      crop.healthPercentage > 75 ? 'bg-green-500' : 
                      crop.healthPercentage > 50 ? 'bg-amber-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${crop.healthPercentage}%` }}
                  ></div>
                </div>
                <div className="mt-1 flex justify-between text-xs text-gray-500">
                  <span>স্বাস্থ্য: {crop.healthPercentage}%</span>
                  <span>রোপণ: {crop.plantedDate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disease Alerts */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold flex items-center">
              <AlertCircle className="mr-2 text-primary-600" size={20} />
              রোগের সতর্কতা
            </h2>
            <Link 
              to="/disease-detection" 
              className="text-sm text-primary-600 hover:text-primary-700"
            >
              সব দেখুন
            </Link>
          </div>
          
          <div className="space-y-4">
            {alerts.length > 0 ? (
              alerts.map((alert) => (
                <div key={alert.id} className="border rounded-md p-3 hover:shadow-sm transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">{alert.cropName}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${getSeverityClass(alert.severity)}`}>
                      {alert.severity === 'low' ? 'কম' : 
                       alert.severity === 'medium' ? 'মাঝারি' : 'উচ্চ'}
                    </span>
                  </div>
                  <p className="text-red-600 font-medium mb-1">{alert.diseaseName}</p>
                  <p className="text-sm text-gray-600 mb-2">{alert.recommendations}</p>
                  <p className="text-xs text-gray-500">সনাক্ত: {alert.detectedDate}</p>
                </div>
              ))
            ) : (
              <div className="text-center p-4 bg-green-50 rounded-md">
                <Check className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <p className="text-green-600">কোন সক্রিয় রোগের সতর্কতা নেই!</p>
              </div>
            )}
          </div>
        </div>

        {/* Recent Sales */}
        <div className="lg:col-span-3 card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold flex items-center">
              <BarChart3 className="mr-2 text-primary-600" size={20} />
              সাম্প্রতিক বিক্রয়
            </h2>
            <Link 
              to="/sales-report" 
              className="text-sm text-primary-600 hover:text-primary-700"
            >
              সব দেখুন
            </Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ফসল</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">পরিমাণ (কেজি)</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">মূল্য (টাকা)</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">তারিখ</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ক্রেতা</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentSales.map((sale) => (
                  <tr key={sale.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 whitespace-nowrap">{sale.cropName}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{sale.quantity}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{sale.price} ৳</td>
                    <td className="px-4 py-3 whitespace-nowrap">{sale.date}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{sale.buyer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;