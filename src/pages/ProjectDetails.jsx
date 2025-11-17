import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ImageCarousel from '../components/ImageCarousel';
import Button from '../components/Button';
import Card from '../components/Card';

const ProjectDetails = () => {
  const { slug } = useParams();

  const project = useMemo(() => projects.find((item) => item.slug === slug), [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            The project you are looking for doesn&apos;t exist or has been moved.
          </p>
          <Button to="/projects" variant="primary">
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  const featureHighlights = [
    {
      title: 'Project Overview',
      description: project.description,
    },
    {
      title: 'Tech Stack',
      description: `Crafted with ${project.technologies.join(', ')}.`,
    },
    {
      title: 'Deliverables',
      description:
        'Responsive UI, multi-language support, in-app payments, secure authentication, and production-ready deployment.',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <section className="py-12 bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <Link
            to="/projects"
            className="inline-flex items-center text-sm text-primary-600 dark:text-primary-400 hover:underline mb-6"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-3xl">
              <p className="uppercase tracking-wide text-xs text-primary-500 font-semibold mb-2">Featured Case Study</p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">{project.title}</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">{project.description}</p>
            </div>
            <div className="flex gap-4">
              {project.githubLink && (
                <Button href={project.githubLink} variant="outline">
                  GitHub Repo
                </Button>
              )}
              {project.playStoreLink && (
                <Button href={project.playStoreLink} variant="primary">
                  View on Store
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ImageCarousel images={project.screenshots} />
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Key Highlights</h3>
              <div className="space-y-4">
                {featureHighlights.map((highlight) => (
                  <div key={highlight.title}>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-200">{highlight.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{highlight.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900/30">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100"
          >
            Screenshots
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.screenshots.map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl overflow-hidden shadow-lg"
              >
                <img src={image} alt={`${project.title} screen ${index + 1}`} className="w-full h-64 object-cover" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;

