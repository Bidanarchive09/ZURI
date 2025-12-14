export interface Car {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  location: string;
  year: number;
  mileage: number;
  // Japanese import features
  engineCapacity?: number; // cc
  transmission?: string; // Automatic/Manual
  driveType?: string; // 2WD/4WD/AWD
  fuelType?: string; // Petrol/Diesel/Hybrid
  color?: string;
  steering?: string; // Right/Left
  grade?: string; // Auction grade (4/4.5/5)
  chassisNumber?: string;
  importYear?: number;
}