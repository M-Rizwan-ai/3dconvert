// This is a mock service that simulates the conversion process
// In a real app, this would call an API endpoint or use a 3D conversion library

import { ConversionSettings } from '../components/ConversionOptions';

export interface ConversionResult {
  modelUrl: string;
  format: string;
}

// Mock function to simulate the conversion process with a delay
export const convertImageTo3D = async (
  imageFile: File,
  settings: ConversionSettings
): Promise<ConversionResult> => {
  console.log('Converting image with settings:', settings);
  
  // Simulate processing time
  const processingTime = 2000 + Math.random() * 3000; // 2-5 seconds
  
  return new Promise((resolve) => {
    setTimeout(() => {
      // In a real app, this would return a URL to the converted model
      // For now, we'll just return a mock URL
      resolve({
        modelUrl: `https://example.com/models/${Date.now()}.${settings.format}`,
        format: settings.format
      });
    }, processingTime);
  });
};

export const downloadModel = (modelUrl: string, format: string, originalFilename: string) => {
  // In a real app, this would trigger a download of the actual file
  // For now, we'll just log to console
  console.log(`Downloading model from ${modelUrl}`);
  
  // Mock successful download message
  alert(`Model would be downloaded as ${originalFilename.split('.')[0]}.${format}`);
};

// Mock history data
export const getConversionHistory = () => {
  return [
    {
      id: '1',
      name: 'mountain.jpg',
      date: new Date(Date.now() - 86400000), // 1 day ago
      format: 'obj',
      thumbnail: 'https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      id: '2',
      name: 'sculpture.jpg',
      date: new Date(Date.now() - 172800000), // 2 days ago
      format: 'fbx',
      thumbnail: 'https://images.pexels.com/photos/1918290/pexels-photo-1918290.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      id: '3',
      name: 'building.jpg',
      date: new Date(Date.now() - 259200000), // 3 days ago
      format: 'gltf',
      thumbnail: 'https://images.pexels.com/photos/2111751/pexels-photo-2111751.jpeg?auto=compress&cs=tinysrgb&w=200',
    }
  ];
};