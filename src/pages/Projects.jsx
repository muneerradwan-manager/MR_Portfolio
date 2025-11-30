import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { projects } from "../data/projects";
import Card from "../components/Card";
import Button from "../components/Button";
import LinkIcon from "../components/LinkIcon";

const Projects = () => {
  const { t } = useTranslation();
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const [expandedTechnologies, setExpandedTechnologies] = useState({});
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-primary-600 to-gray-900 dark:from-gray-100 dark:via-primary-400 dark:to-gray-100 bg-clip-text text-transparent">
              {t('projects.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t('projects.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col overflow-hidden">
                  {/* Project Cover */}
                  <div className="relative h-48">
                    {project.screenshots?.length ? (
                      <img
                        src={project.screenshots[0]}
                        alt={`${project.title} preview`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-primary-400 to-primary-600 dark:from-primary-600 dark:to-primary-800 flex items-center justify-center">
                        <div className="text-white text-6xl font-bold opacity-20">
                          {project.title.charAt(0)}
                        </div>
                      </div>
                    )}
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        {t('projects.featured', 'Featured')}
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                      {t(`projectDetails.${project.slug}.title`, project.title)}
                    </h3>
                    
                    {/* Description with Read More */}
                    <div className="mb-4 flex-1">
                      <p 
                        className={`text-gray-600 dark:text-gray-300 ${
                          !expandedDescriptions[project.id] ? 'line-clamp-6' : ''
                        }`}
                      >
                        {t(`projectDetails.${project.slug}.description`, project.description)}
                      </p>
                      {project.description && (
                        <button
                          onClick={() => setExpandedDescriptions(prev => ({
                            ...prev,
                            [project.id]: !prev[project.id]
                          }))}
                          className="mt-2 text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium"
                        >
                          {expandedDescriptions[project.id] ? 'Read Less' : 'Read More'}
                        </button>
                      )}
                    </div>

                    {/* Technologies with Preview All */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {(expandedTechnologies[project.id] 
                          ? project.technologies 
                          : project.technologies.slice(0, 7)
                        ).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-800/50 text-primary-700 dark:text-primary rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.technologies.length > 7 && (
                        <button
                          onClick={() => setExpandedTechnologies(prev => ({
                            ...prev,
                            [project.id]: !prev[project.id]
                          }))}
                          className="mt-2 text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium"
                        >
                          {expandedTechnologies[project.id] ? 'Show Less' : 'Preview All'}
                        </button>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3 mt-auto">
                      <Button
                        to={`/projects/${project.slug}`}
                        variant="primary"
                        className="w-full text-sm py-2"
                      >
                        {t('projects.viewDetails')}
                      </Button>
                      {project.links?.length > 0 && (
                        <Button
                          href={project.links[0].href}
                          variant="secondary"
                          className="w-full text-sm py-2 gap-2 flex items-center justify-center"
                        >
                          <LinkIcon type={project.links[0].type} />
                          {project.links[0].type === "drive"
                            ? t("projectDetails.common.downloadApp", "Download App")
                            : t("projectDetails.common.visitWebsite", project.links[0].label)}
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
