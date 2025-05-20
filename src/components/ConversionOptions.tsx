import React, { useState } from 'react';
import { Settings, Sliders } from 'lucide-react';

interface ConversionOptionsProps {
  onOptionsChange: (options: ConversionSettings) => void;
}

export interface ConversionSettings {
  format: string;
  quality: number;
  detail: number;
  textured: boolean;
}

const ConversionOptions: React.FC<ConversionOptionsProps> = ({ onOptionsChange }) => {
  const [settings, setSettings] = useState<ConversionSettings>({
    format: 'obj',
    quality: 75,
    detail: 50,
    textured: true
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' 
      ? (e.target as HTMLInputElement).checked 
      : type === 'range' 
        ? parseInt(value) 
        : value;

    setSettings(prev => {
      const newSettings = {
        ...prev,
        [name]: newValue
      };
      onOptionsChange(newSettings);
      return newSettings;
    });
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md mb-8">
      <div className="flex items-center mb-4">
        <Settings className="h-5 w-5 text-teal-500 mr-2" />
        <h2 className="text-xl font-semibold">Conversion Settings</h2>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Output Format
          </label>
          <select 
            name="format" 
            value={settings.format}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="obj">OBJ (Wavefront)</option>
            <option value="fbx">FBX (Filmbox)</option>
            <option value="gltf">glTF/GLB</option>
            <option value="stl">STL</option>
          </select>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            {settings.format === 'obj' && 'Best for general use and texturing.'}
            {settings.format === 'fbx' && 'Ideal for animation and Unity import.'}
            {settings.format === 'gltf' && 'Modern format with good compression.'}
            {settings.format === 'stl' && 'Best for 3D printing applications.'}
          </p>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Quality
            </label>
            <span className="text-sm text-teal-500">{settings.quality}%</span>
          </div>
          <div className="flex items-center">
            <Sliders className="h-4 w-4 text-gray-400 mr-2" />
            <input 
              type="range" 
              name="quality" 
              min="10" 
              max="100" 
              value={settings.quality} 
              onChange={handleChange}
              className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-teal-500"
            />
          </div>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            Higher quality increases file size and processing time
          </p>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Detail Level
            </label>
            <span className="text-sm text-teal-500">{settings.detail}%</span>
          </div>
          <div className="flex items-center">
            <Sliders className="h-4 w-4 text-gray-400 mr-2" />
            <input 
              type="range" 
              name="detail" 
              min="10" 
              max="100" 
              value={settings.detail} 
              onChange={handleChange}
              className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-teal-500"
            />
          </div>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            Controls the geometric complexity of the 3D model
          </p>
        </div>

        <div className="flex items-center">
          <input 
            type="checkbox" 
            id="textured" 
            name="textured"
            checked={settings.textured} 
            onChange={handleChange}
            className="h-4 w-4 text-teal-500 focus:ring-teal-400 border-gray-300 rounded"
          />
          <label htmlFor="textured" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
            Generate textures from image
          </label>
        </div>
      </div>
    </div>
  );
};

export default ConversionOptions;