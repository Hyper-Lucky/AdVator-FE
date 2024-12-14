export interface Apart {
  apartName: string;
  unitPrice: number;
  tvCount: number;
  totalPrice: number;
  company: string;
  address: string;
  rating: string;
  request: number;
}

// n 명의 사장님

export interface AdvertisingRequest {
  apart: Apart[];
  store: string;
  industry: string;
  business: string;
  period?: string;
  start?: string;
  description: string;
  author: string;
  phone: string;
  email: string;
  personalAgree: boolean;
  marketingAgree: boolean;
}

export interface SearchOptions {
  city: string;
  district: string;
  area: string;
  sort?: 'low' | 'high';
  rating?: string | null;
  company?: string | null;
}

export interface GPSCoordinates {
  gpsX: number;
  gpsY: number;
}

export interface LatLng {
  lat: number;
  lng: number;
}

export interface AdResponse {
  apartName: string[];
  industry: string;
  business: string;
  start: string;
  description: string;
  author: string;
  phone: string;
  email: string;
}
