import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageCarousel = ({ images = [], className = '' }) => {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  if (!total) {
    return (
      <div className={`bg-gray-100 dark:bg-gray-800 rounded-xl h-64 flex items-center justify-center ${className}`}>
        <p className="text-gray-500 dark:text-gray-400 text-sm">No screenshots available</p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-2xl shadow-2xl ${className}`}>
      <AnimatePresence mode="wait">
        <motion.img
          key={images[current]}
          src={images[current]}
          alt={`Screenshot ${current + 1}`}
          className="w-full h-96 object-cover"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          loading="lazy"
        />
      </AnimatePresence>

      {total > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-900/80 text-gray-700 dark:text-gray-200 rounded-full p-3 shadow-lg hover:scale-105 transition-transform"
            aria-label="Previous screenshot"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-900/80 text-gray-700 dark:text-gray-200 rounded-full p-3 shadow-lg hover:scale-105 transition-transform"
            aria-label="Next screenshot"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {total > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2.5 rounded-full transition-all ${current === index ? 'w-8 bg-primary-500' : 'w-2.5 bg-white/60 dark:bg-gray-600'}`}
              aria-label={`Go to screenshot ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;

