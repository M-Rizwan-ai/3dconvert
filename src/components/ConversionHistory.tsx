import React from 'react';
import { Clock, Download, Trash2 } from 'lucide-react';

export interface ConversionHistoryItem {
  id: string;
  name: string;
  date: Date;
  format: string;
  thumbnail: string;
}

interface ConversionHistoryProps {
  items: ConversionHistoryItem[];
  onDownload: (id: string) => void;
  onDelete: (id: string) => void;
}

const ConversionHistory: React.FC<ConversionHistoryProps> = ({ 
  items, 
  onDownload, 
  onDelete 
}) => {
  if (items.length === 0) return null;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-8">
      <div className="flex items-center mb-4">
        <Clock className="h-5 w-5 text-teal-500 mr-2" />
        <h2 className="text-xl font-semibold">Conversion History</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(item => (
          <div 
            key={item.id} 
            className="border dark:border-slate-700 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="h-24 bg-slate-100 dark:bg-slate-700 relative">
              <img 
                src={item.thumbnail} 
                alt={item.name} 
                className="w-full h-full object-cover"
              />
              <span className="absolute top-2 right-2 bg-slate-800 text-white text-xs px-2 py-1 rounded">
                {item.format.toUpperCase()}
              </span>
            </div>
            
            <div className="p-3">
              <h3 className="font-medium text-sm truncate" title={item.name}>
                {item.name}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {item.date.toLocaleDateString()}
              </p>
              
              <div className="flex justify-between mt-2">
                <button 
                  onClick={() => onDownload(item.id)}
                  className="text-teal-500 hover:text-teal-600 transition-colors"
                  title="Download"
                >
                  <Download className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => onDelete(item.id)}
                  className="text-red-500 hover:text-red-600 transition-colors"
                  title="Delete"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConversionHistory;