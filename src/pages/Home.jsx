import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';

const Home = () => {
  const { t } = useTranslation();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-900 dark:to-primary-900/20" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-primary-300 dark:bg-primary-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400 dark:bg-primary-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-primary-600 to-gray-900 dark:from-gray-100 dark:via-primary-400 dark:to-gray-100 bg-clip-text text-transparent"
            >
              {t('home.hero.headline')}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
            >
              {t('home.hero.lead')}
            </motion.p>

            <motion.div variants={itemVariants} className="mb-8">
              <motion.div
                className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-800/50 text-primary-700 dark:text-primary text-sm font-semibold"
                whileHover={{ scale: 1.05 }}
              >
                {t('home.hero.badge')}
              </motion.div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
            >
              {t('home.hero.description')}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex justify-center items-center"
            >
              <Button 
                href="https://drive.google.com/drive/folders/1jetr6SgWuY7Jyk32FPy6z-bKGpldGNn6?usp=sharing" 
                variant="primary" 
                className="text-base px-8 py-4"
              >
                Download My CV
              </Button>
            </motion.div>
          </motion.div>
        </div>

      </section>
    </div>
  );
};

export default Home;

