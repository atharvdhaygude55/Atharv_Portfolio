import React, { useState } from 'react';

const HobbyModal = ({ hobby, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !hobby) return null;

  const images = hobby.images || [];
  const currentImage = images[currentImageIndex] || '';

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-[99998] transition-opacity"
        onClick={onClose}
        style={{
          pointerEvents: 'auto'
        }}
      />

      {/* Modal Container */}
      <div 
        className="fixed inset-0 z-[99999] flex items-center justify-center p-4 pointer-events-none"
        style={{
          pointerEvents: 'none'
        }}
      >
        <div 
          className="bg-gray-900 border border-[#8245ec] rounded-2xl shadow-2xl max-w-xl w-full max-h-[82vh] overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
          style={{
            pointerEvents: 'auto'
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-3 border-b border-gray-700">
            <h2 className="text-xl font-bold text-white flex items-center gap-3">
              <img 
                src={hobby.logo} 
                alt={hobby.name}
                className="w-8 h-8"
              />
              {hobby.name}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-2xl font-bold transition-colors"
            >
              ×
            </button>
          </div>

          {/* Image Gallery */}
          <div className="p-6 overflow-y-auto flex-1">
            {images.length > 0 ? (
              <>
                {/* Main Image */}
                <div className="mb-6 rounded-lg overflow-hidden bg-gray-800">
                  <img
                    src={currentImage}
                    alt={`${hobby.name} ${currentImageIndex + 1}`}
                    className="w-full h-80 object-cover"
                  />
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={handlePrevImage}
                    disabled={images.length === 1}
                    className="px-4 py-2 bg-[#8245ec] hover:bg-purple-700 disabled:bg-gray-700 text-white rounded-lg transition-colors font-semibold"
                  >
                    ← Previous
                  </button>

                  <span className="text-gray-300 font-semibold">
                    {currentImageIndex + 1} / {images.length}
                  </span>

                  <button
                    onClick={handleNextImage}
                    disabled={images.length === 1}
                    className="px-4 py-2 bg-[#8245ec] hover:bg-purple-700 disabled:bg-gray-700 text-white rounded-lg transition-colors font-semibold"
                  >
                    Next →
                  </button>
                </div>

                {/* Thumbnail Gallery */}
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        index === currentImageIndex
                          ? 'border-[#8245ec]'
                          : 'border-gray-700 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-400">No images available for this hobby</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className=" border-t border-gray-700 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-1 bg-gray-700 w-22  hover:bg-gray-600 text-white rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HobbyModal;
