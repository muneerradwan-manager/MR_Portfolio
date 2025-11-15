import { motion } from 'framer-motion';
import Card from '../components/Card';

const About = () => {
  const skills = [
    { category: 'Languages', items: ['Dart', 'JavaScript', 'TypeScript', 'Python'] },
    { category: 'Frameworks', items: ['Flutter', 'React', 'Node.js'] },
    { category: 'Backend', items: ['Firebase', 'REST APIs', 'GraphQL', 'Cloud Functions'] },
    { category: 'State Management', items: ['Provider', 'Bloc', 'Riverpod', 'GetX'] },
    { category: 'Tools', items: ['Git', 'Docker', 'CI/CD', 'VS Code', 'Android Studio'] },
    { category: 'Design', items: ['Material Design', 'Cupertino', 'Figma', 'Adobe XD'] },
  ];

  const experiences = [
    {
      title: 'Senior Flutter Developer',
      company: 'Tech Company',
      period: '2022 - Present',
      description: 'Leading mobile app development projects, mentoring junior developers, and architecting scalable Flutter applications.',
    },
    {
      title: 'Flutter Developer',
      company: 'Startup Inc',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple Flutter applications, integrated third-party APIs, and optimized app performance.',
    },
    {
      title: 'Mobile Developer',
      company: 'Digital Agency',
      period: '2019 - 2020',
      description: 'Built cross-platform mobile applications using Flutter, collaborated with designers and backend developers.',
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              About Me
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Get to know more about my journey, skills, and passion for mobile development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container-custom">
          <Card className="p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">My Story</h2>
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Hello! I'm Muneer Radwan, a passionate Flutter developer with a love for creating 
                  beautiful and functional mobile applications. My journey in mobile development began 
                  when I discovered the power of Flutter to build cross-platform apps with a single codebase.
                </p>
                <p>
                  Over the years, I've had the opportunity to work on various projects ranging from 
                  e-commerce applications to social media platforms, each teaching me something new 
                  about mobile development, user experience, and scalable architecture.
                </p>
                <p>
                  I believe in writing clean, maintainable code and following best practices. I'm 
                  constantly learning and staying up-to-date with the latest Flutter updates and 
                  mobile development trends. When I'm not coding, I enjoy contributing to open-source 
                  projects, writing technical articles, and sharing knowledge with the developer community.
                </p>
                <p>
                  My goal is to create mobile applications that not only look great but also provide 
                  exceptional user experiences. I'm always excited to take on new challenges and 
                  collaborate on innovative projects.
                </p>
              </div>
            </motion.div>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100"
          >
            Skills & Technologies
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                    {skill.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100"
          >
            Experience
          </motion.h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

