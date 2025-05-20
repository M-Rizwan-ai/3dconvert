import { useState } from 'react';
import { ConversionSettings } from '../components/ConversionOptions';
import { 
  convertImageTo3D, 
  ConversionResult, 
  downloadModel,
  getConversionHistory
} from '../services/conversionService';
import { ConversionHistoryItem } from '../components/ConversionHistory';

export const useConversion = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [conversionSettings, setConversionSettings] = useState<ConversionSettings>({
    format: 'obj',
    quality: 75,
    detail: 50,
    textured: true
  });
  const [isConverting, setIsConverting] = useState(false);
  const [conversionResult, setConversionResult] = useState<ConversionResult | null>(null);
  const [history, setHistory] = useState<ConversionHistoryItem[]>(getConversionHistory());

  const handleImageSelect = (file: File) => {
    setSelectedImage(file);
    // Reset conversion result when new image is selected
    setConversionResult(null);
  };

  const handleOptionsChange = (options: ConversionSettings) => {
    setConversionSettings(options);
  };

  const handleConvert = async () => {
    if (!selectedImage) return;
    
    setIsConverting(true);
    
    try {
      const result = await convertImageTo3D(selectedImage, conversionSettings);
      setConversionResult(result);
      
      // Add to history
      const newHistoryItem: ConversionHistoryItem = {
        id: Date.now().toString(),
        name: selectedImage.name,
        date: new Date(),
        format: result.format,
        thumbnail: URL.createObjectURL(selectedImage),
      };
      
      setHistory(prev => [newHistoryItem, ...prev]);
    } catch (error) {
      console.error('Conversion failed:', error);
      alert('Conversion failed. Please try again.');
    } finally {
      setIsConverting(false);
    }
  };

  const handleDownload = () => {
    if (conversionResult && selectedImage) {
      downloadModel(
        conversionResult.modelUrl, 
        conversionResult.format, 
        selectedImage.name
      );
    }
  };

  const handleHistoryDownload = (id: string) => {
    const item = history.find(h => h.id === id);
    if (item) {
      downloadModel(
        `https://example.com/models/${id}.${item.format}`,
        item.format,
        item.name
      );
    }
  };

  const handleHistoryDelete = (id: string) => {
    setHistory(prev => prev.filter(item => item.id !== id));
  };

  return {
    selectedImage,
    conversionSettings,
    isConverting,
    conversionResult,
    history,
    handleImageSelect,
    handleOptionsChange,
    handleConvert,
    handleDownload,
    handleHistoryDownload,
    handleHistoryDelete,
  };
};

export default useConversion;