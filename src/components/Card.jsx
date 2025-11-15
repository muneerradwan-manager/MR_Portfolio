import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true, ...props }) => {
  const baseClasses = 'bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300';
  const hoverClasses = hover ? 'hover:shadow-2xl hover:-translate-y-1' : '';
  
  return (
    <motion.div
      className={`${baseClasses} ${hoverClasses} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;

