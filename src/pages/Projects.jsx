import { motion } from "framer-motion";
import { projects } from "../data/projects";
import Card from "../components/Card";
import Button from "../components/Button";
import LinkIcon from "../components/LinkIcon";

const Projects = () => {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A collection of Flutter applications I've built, showcasing my
              skills in mobile development, UI/UX design, and problem-solving.
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
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3 mt-auto">
                      <Button
                        to={`/projects/${project.slug}`}
                        variant="primary"
                        className="w-full text-sm py-2"
                      >
                        View Details
                      </Button>
                      {project.links?.length > 0 && (
                        <Button
                          href={project.links[0].href}
                          variant="secondary"
                          className="w-full text-sm py-2 gap-2"
                        >
                          <LinkIcon type={project.links[0].type} />
                          {project.links[0].label}
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
