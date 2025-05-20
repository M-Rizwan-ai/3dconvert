import React from 'react';
import { Download, Copy, ArrowUpRight } from 'lucide-react';

interface ModelPreviewProps {
  modelUrl: string | null;
  format: string;
  onDownload: () => void;
}

const ModelPreview: React.FC<ModelPreviewProps> = ({ modelUrl, format, onDownload }) => {
  if (!modelUrl) return null;

  // In a real app, this would be a 3D viewer component
  // For this demo, we'll just show a placeholder
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg mb-8 animate-fade-in">
      <div className="h-64 bg-slate-100 dark:bg-slate-700 relative flex items-center justify-center">
        {/* In a real implementation, this would be a 3D viewer */}
        <div className="text-center p-6">
          <div className="mx-auto w-24 h-24 border-4 border-teal-500 border-dashed rounded-full mb-4 animate-pulse"></div>
          <p className="text-slate-500 dark:text-slate-400">
            3D Preview (placeholder)
          </p>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">Your 3D Model is Ready!</h3>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {format.toUpperCase()}
          </span>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
            Blender Compatible
          </span>
          <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
            Unity Compatible
          </span>
        </div>
        
        <div className="space-y-3">
          <button
            onClick={onDownload}
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center transition-colors"
          >
            <Download className="h-5 w-5 mr-2" />
            Download 3D Model
          </button>
          
          <div className="flex gap-2">
            <button className="flex-1 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 font-medium py-2 px-4 rounded-lg flex items-center justify-center transition-colors">
              <Copy className="h-4 w-4 mr-2" />
              Copy Link
            </button>
            <button className="flex-1 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 font-medium py-2 px-4 rounded-lg flex items-center justify-center transition-colors">
              <ArrowUpRight className="h-4 w-4 mr-2" />
              Open in Editor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelPreview;