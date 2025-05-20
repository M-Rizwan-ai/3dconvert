import React from 'react';
import { RefreshCw } from 'lucide-react';

interface ConversionButtonProps {
  onConvert: () => void;
  isConverting: boolean;
  disabled: boolean;
}

const ConversionButton: React.FC<ConversionButtonProps> = ({ 
  onConvert, 
  isConverting, 
  disabled 
}) => {
  return (
    <button
      onClick={onConvert}
      disabled={disabled || isConverting}
      className={`
        w-full py-3 px-4 rounded-lg font-medium text-white 
        flex items-center justify-center
        transition-all duration-200
        ${disabled 
          ? 'bg-gray-400 cursor-not-allowed' 
          : isConverting 
            ? 'bg-teal-600 cursor-wait' 
            : 'bg-teal-500 hover:bg-teal-600 shadow-lg hover:shadow-xl'
        }
      `}
    >
      {isConverting ? (
        <>
          <RefreshCw className="h-5 w-5 mr-2 animate-spin" />
          Converting...
        </>
      ) : (
        'Convert to 3D'
      )}
    </button>
  );
};

export default ConversionButton;