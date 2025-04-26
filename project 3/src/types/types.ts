export interface User {
  id: string;
  name: string;
  mobile: string;
  location?: string;
  profileImage?: string;
}

export interface CropStatus {
  id: string;
  name: string;
  status: 'good' | 'warning' | 'danger';
  plantedDate: string;
  estimatedHarvest: string;
  healthPercentage: number;
}

export interface DiseaseAlert {
  id: string;
  cropId: string;
  cropName: string;
  diseaseName: string;
  severity: 'low' | 'medium' | 'high';
  detectedDate: string;
  recommendations: string;
}

export interface WeatherInfo {
  temperature: number;
  condition: string;
  humidity: number;
  rainfall: number;
  forecast: {
    day: string;
    temperature: number;
    condition: string;
  }[];
}

export interface Sale {
  id: string;
  cropName: string;
  quantity: number;
  price: number;
  date: string;
  buyer: string;
}