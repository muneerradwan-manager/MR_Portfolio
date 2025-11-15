import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Home = () => {
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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
            <motion.div variants={itemVariants} className="mb-6">
              <motion.div
                className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-4"
                whileHover={{ scale: 1.05 }}
              >
                Flutter Developer
              </motion.div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-primary-600 to-gray-900 dark:from-gray-100 dark:via-primary-400 dark:to-gray-100 bg-clip-text text-transparent"
            >
              Hi, I'm Muneer Radwan
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              I build beautiful, performant mobile applications with Flutter
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
            >
              Passionate about creating seamless user experiences and crafting elegant solutions 
              to complex problems. Specialized in cross-platform mobile development with Flutter & Dart.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button to="/projects" variant="primary" className="text-base px-8 py-4">
                View My Work
              </Button>
              <Button to="/contact" variant="outline" className="text-base px-8 py-4">
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* About Summary Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              About Me
            </h2>
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                I'm a dedicated Flutter developer with a passion for building high-quality mobile 
                applications that users love. With expertise in Dart, Flutter framework, and modern 
                mobile development practices, I create apps that are not only visually appealing but 
                also performant and scalable.
              </p>
              <p>
                My journey in mobile development has led me to work with various technologies including 
                Firebase for backend services, state management solutions like Provider and Bloc, and 
                RESTful APIs. I'm always eager to learn new technologies and improve my craft.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new Flutter packages, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
            <div className="mt-8">
              <Button to="/about" variant="primary">
                Learn More About Me
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100"
          >
            Technologies I Work With
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Flutter', 'Dart', 'Firebase', 'REST APIs', 'Provider', 'Bloc', 'Git', 'CI/CD'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

