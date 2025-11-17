import { motion } from 'framer-motion';

const MotionCard = ({ children, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ delay: index * 0.05, duration: 0.4 }}
    className="flex justify-center h-full"
  >
    {children}
  </motion.div>
);

const MobileScreenshotGallery = ({ images = [], onImageClick }) => {
  if (!images.length) {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-12 text-center">
        <p className="text-gray-500 dark:text-gray-400 text-sm">No screenshots available</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <MotionCard key={image} index={index}>
            <PhoneFrame
              image={image}
              index={index}
              interactive={Boolean(onImageClick)}
              onClick={() => onImageClick?.(index)}
            />
          </MotionCard>
        ))}
      </div>
    </div>
  );
};

const PhoneFrame = ({ image, index, interactive, onClick }) => {
  const Component = interactive ? 'button' : 'div';
  return (
    <Component
      type={interactive ? 'button' : undefined}
      onClick={interactive ? onClick : undefined}
      className={`group relative rounded-[2.3rem] bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 p-3 shadow-[0_15px_35px_rgba(0,0,0,0.35)] min-h-[24rem] flex items-center justify-center w-full ${
        interactive
          ? 'cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500 focus-visible:ring-offset-gray-900/0'
          : ''
      }`}
      style={{ rotate: index % 2 === 0 ? '-0.5deg' : '0.5deg' }}
      aria-label={interactive ? 'Open screenshot gallery' : undefined}
    >
      <div className="absolute top-5 left-1/2 -translate-x-1/2 w-14 h-1.5 rounded-full bg-gray-700/80" />
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full bg-gray-700/80" />
      <div className="w-full rounded-[1.9rem] bg-black/40 p-2 relative overflow-hidden">
        <img
          src={image}
          alt="Project mobile screenshot"
          loading="lazy"
          className="w-full h-[28rem] object-contain rounded-[1.5rem] bg-black transition-transform duration-300 group-hover:scale-[1.01]"
        />
        {interactive && (
          <div className="absolute inset-0 rounded-[1.9rem] bg-gradient-to-b from-black/0 via-black/0 to-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-4">
            <span className="text-xs uppercase tracking-wide text-white/80 bg-black/40 px-3 py-1 rounded-full">
              Tap to expand
            </span>
          </div>
        )}
      </div>
    </Component>
  );
};

export default MobileScreenshotGallery;

