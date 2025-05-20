import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ImageUploader from './components/ImageUploader';
import ConversionOptions from './components/ConversionOptions';
import ConversionButton from './components/ConversionButton';
import ModelPreview from './components/ModelPreview';
import ConversionHistory from './components/ConversionHistory';
import useConversion from './hooks/useConversion';

function App() {
  const {
    selectedImage,
    isConverting,
    conversionResult,
    history,
    handleImageSelect,
    handleOptionsChange,
    handleConvert,
    handleDownload,
    handleHistoryDownload,
    handleHistoryDelete,
  } = useConversion();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-slate-900 text-slate-900 dark:text-white">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Transform Images to 3D Models
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              Convert any image into a detailed 3D model compatible with Blender and Unity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <ImageUploader onImageSelect={handleImageSelect} />
              
              {selectedImage && (
                <>
                  <ConversionOptions onOptionsChange={handleOptionsChange} />
                  
                  <ConversionButton 
                    onConvert={handleConvert}
                    isConverting={isConverting}
                    disabled={!selectedImage}
                  />
                </>
              )}
            </div>

            <div>
              {conversionResult && (
                <ModelPreview 
                  modelUrl={conversionResult.modelUrl}
                  format={conversionResult.format}
                  onDownload={handleDownload}
                />
              )}
              
              <ConversionHistory 
                items={history}
                onDownload={handleHistoryDownload}
                onDelete={handleHistoryDelete}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;