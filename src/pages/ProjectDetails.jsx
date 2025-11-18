import { useMemo, useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { projects } from "../data/projects";
import MobileScreenshotGallery from "../components/MobileScreenshotGallery";
import Button from "../components/Button";
import Card from "../components/Card";
import LinkIcon from "../components/LinkIcon";

const brandFallback = "#0EA5E9";

const BrandBadge = ({ project, primaryColor }) => {
  const initials = project?.title
    ?.split(" ")
    ?.map((word) => word.charAt(0))
    ?.join("")
    ?.slice(0, 2)
    ?.toUpperCase();

  if (project?.brand?.logo) {
    return (
      <img
        src={project.brand.logo}
        alt={`${project.title} logo`}
        className="h-16 w-auto object-contain"
      />
    );
  }

  if (project?.brand?.icon) {
    return (
      <div className="h-16 w-16 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/30">
        <img
          src={project.brand.icon}
          alt={`${project.title} icon`}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className="h-16 w-16 rounded-2xl flex items-center justify-center text-white font-semibold text-xl shadow-2xl"
      style={{
        background: `linear-gradient(135deg, ${primaryColor} 0%, #0f172a 100%)`,
      }}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
};

const ProjectDetails = () => {
  const { slug } = useParams();
  const { t } = useTranslation();

  const project = useMemo(
    () => projects.find((item) => item.slug === slug),
    [slug]
  );
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            The project you are looking for doesn&apos;t exist or has been
            moved.
          </p>
          <Button to="/projects" variant="primary">
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  const totalScreens = project.screenshots?.length ?? 0;
  const brandAccent = project.brand?.accent ?? brandFallback;
  const links = project.links ?? [];
  const metrics = project.metrics ?? [];
  const deliverables = project.deliverables ?? [];
  const caseStudy = project.caseStudy ?? null;

  // Get the current primary color from CSS variables (reactive)
  const [primaryColor, setPrimaryColor] = useState(() => {
    if (typeof window !== 'undefined') {
      const root = document.documentElement;
      const primary600 = getComputedStyle(root).getPropertyValue('--color-primary-600').trim();
      return primary600 || '#16a34a'; // fallback to default green
    }
    return '#16a34a';
  });

  // Update primary color when it changes (check periodically or on mount)
  useEffect(() => {
    const updatePrimaryColor = () => {
      if (typeof window !== 'undefined') {
        const root = document.documentElement;
        const primary600 = getComputedStyle(root).getPropertyValue('--color-primary-600').trim();
        setPrimaryColor(primary600 || '#16a34a');
      }
    };

    // Update on mount
    updatePrimaryColor();

    // Update periodically to catch color theme changes
    const interval = setInterval(updatePrimaryColor, 100);

    return () => clearInterval(interval);
  }, []);

  const highlightCards = caseStudy?.highlights?.length
    ? caseStudy.highlights
    : [
        { title: "Project Overview", description: project.description },
        {
          title: "Tech Stack",
          description: `Crafted with ${project.technologies.join(", ")}.`,
        },
      ];

  const openLightbox = useCallback(
    (index) => {
      if (!totalScreens) return;
      setActiveImage(index);
      setLightboxOpen(true);
    },
    [totalScreens]
  );

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  const showNextImage = useCallback(() => {
    if (!totalScreens) return;
    setActiveImage((prev) => (prev + 1) % totalScreens);
  }, [totalScreens]);

  const showPrevImage = useCallback(() => {
    if (!totalScreens) return;
    setActiveImage((prev) => (prev - 1 + totalScreens) % totalScreens);
  }, [totalScreens]);

  useEffect(() => {
    if (typeof document === "undefined") {
      return undefined;
    }

    document.body.style.overflow = lightboxOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  useEffect(() => {
    if (!lightboxOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      } else if (event.key === "ArrowRight") {
        showNextImage();
      } else if (event.key === "ArrowLeft") {
        showPrevImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeLightbox, lightboxOpen, showNextImage, showPrevImage]);

  return (
    <div className="min-h-screen pt-24 pb-20 space-y-16">
      <section className="pt-4">
        <div className="container-custom space-y-8">
          <div className="flex items-center justify-between gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center text-sm text-primary-600 dark:text-primary-400 hover:underline"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              {t('projectDetails.common.backToProjects')}
            </Link>
            <p className="text-xs uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400">
              {t('projectDetails.common.featuredCaseStudy')}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl px-8 py-10 shadow-2xl text-white"
            style={{
              background: `linear-gradient(135deg, ${primaryColor} 0%, rgba(15,23,42,0.95) 100%)`,
            }}
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
              <div className="space-y-6 max-w-3xl">
                <div className="flex items-center gap-4">
                  <BrandBadge project={project} primaryColor={primaryColor} />
                  <div>
                    {project.industry && (
                      <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                        {t(`projectDetails.${project.slug}.industry`, project.industry)}
                      </p>
                    )}
                    <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                      {t(`projectDetails.${project.slug}.title`, project.title)}
                    </h1>
                  </div>
                </div>
                {project.tagline && (
                  <p className="text-xl text-white/90">{t(`projectDetails.${project.slug}.tagline`, project.tagline)}</p>
                )}
                <p className="text-base md:text-lg text-white/80">
                  {t(`projectDetails.${project.slug}.description`, project.description)}
                </p>
                {deliverables.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {deliverables.map((deliverable, index) => (
                      <span
                        key={deliverable}
                        className="px-4 py-2 rounded-full bg-white/15 text-sm font-medium tracking-wide"
                      >
                        {t(`projectDetails.${project.slug}.deliverables.${index}`, deliverable)}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {links.length > 0 && (
                <div className="w-full lg:w-auto">
                  <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 space-y-3">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                      {t('projectDetails.common.launchPoints')}
                    </p>
                    {links.map((link) => {
                      const linkLabelKey =
                        link.type === "drive"
                          ? "projectDetails.common.downloadApp"
                          : "projectDetails.common.visitWebsite";
                      const fallbackLabel = link.type === "drive" ? "Download App" : link.label;

                      return (
                        <Button key={link.href} href={link.href} variant="glass" className="w-full gap-2 text-sm">
                          <LinkIcon type={link.type} />
                          {t(linkLabelKey, fallbackLabel)}
                        </Button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {metrics.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
                {metrics.map((metric) => {
                  const valueKey = metric.valueKey
                    ? `projectDetails.${project.slug}.metrics.${metric.valueKey}`
                    : null;
                  const labelKey = metric.labelKey
                    ? `projectDetails.${project.slug}.metrics.${metric.labelKey}`
                    : null;

                  return (
                    <div
                      key={metric.labelKey ?? metric.label}
                      className="rounded-2xl bg-white/10 px-4 py-6 text-center border border-white/10"
                    >
                      <p className="text-3xl font-semibold">
                        {valueKey ? t(valueKey, metric.value) : metric.value}
                      </p>
                      <p className="text-white/70 text-sm uppercase tracking-widest mt-1">
                        {labelKey ? t(labelKey, metric.label) : metric.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <section>
        <div className="container-custom space-y-12">
          {caseStudy?.summary?.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudy.summary.map((item, index) => {
                const key = index === 0 ? 'challenge' : 'solution';
                return (
                  <Card
                    key={item.title}
                    className="p-6 h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
                  >
                    <p className="text-xs uppercase tracking-[0.4em] text-primary-500 mb-3">
                      {t(`projectDetails.${project.slug}.caseStudy.summary.${key}.title`, item.title)}
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-200">
                      {t(`projectDetails.${project.slug}.caseStudy.summary.${key}.body`, item.body)}
                    </p>
                  </Card>
                );
              })}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {highlightCards.map((highlight, index) => (
              <Card key={highlight.title} className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {t(`projectDetails.${project.slug}.caseStudy.highlights.${index}.title`, highlight.title)}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {t(`projectDetails.${project.slug}.caseStudy.highlights.${index}.description`, highlight.description)}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container-custom space-y-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary-500">
                {t('projectDetails.common.productGallery')}
              </p>
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-2">
                {t('projectDetails.common.screensStory')}
              </h2>
            </div>
            {totalScreens > 0 && (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t('projectDetails.common.tapToOpen')}
              </p>
            )}
          </div>

          <MobileScreenshotGallery
            images={project.screenshots}
            onImageClick={openLightbox}
          />
        </div>
      </section>

      {caseStudy?.userJourney?.length > 0 && (
        <section>
          <div className="container-custom space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary-500">
                {t('projectDetails.common.userEntryStory')}
              </p>
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-2">
                {t('projectDetails.common.fromLandingToDashboards')}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudy.userJourney.map((journey, index) => (
                <Card key={journey.title} className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-10 w-10 rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-300 font-semibold flex items-center justify-center">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {t(`projectDetails.${project.slug}.caseStudy.userJourney.${index}.title`, journey.title)}
                    </h3>
                  </div>
                  <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300 list-disc list-inside">
                    {journey.steps.map((step, stepIndex) => (
                      <li key={step}>
                        {t(`projectDetails.${project.slug}.caseStudy.userJourney.${index}.steps.${stepIndex}`, step)}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {caseStudy?.userRoles?.length > 0 && (
        <section>
          <div className="container-custom space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary-500">
                {t('projectDetails.common.roleCapabilities')}
              </p>
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-2">
                {t('projectDetails.common.governanceForPersonas')}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudy.userRoles.map((role, roleIndex) => {
                const roleKey = role.translationKey
                  ? `projectDetails.${project.slug}.caseStudy.userRoles.${role.translationKey}`
                  : null;

                return (
                  <Card key={`${role.translationKey ?? roleIndex}-${role.name}`} className="p-6 flex flex-col h-full">
                    <div className="mb-4">
                      <p className="text-xs uppercase tracking-[0.3em] text-primary-500">
                        {roleKey ? t(`${roleKey}.name`, role.name) : role.name}
                      </p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-1">
                        {roleKey ? t(`${roleKey}.summary`, role.summary) : role.summary}
                      </p>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 list-disc list-inside">
                      {role.capabilities.map((capability, capIndex) => {
                        const capabilityKey = roleKey
                          ? `${roleKey}.capabilities.${capIndex}`
                          : null;
                        return (
                          <li key={`${capabilityKey ?? capIndex}-${capability}`}>
                            {capabilityKey ? t(capabilityKey, capability) : capability}
                          </li>
                        );
                      })}
                    </ul>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {caseStudy?.flow?.length > 0 && (
        <section>
          <div className="container-custom space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary-500">
                {t('projectDetails.common.applicationFlow')}
              </p>
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-2">
                {t('projectDetails.common.systemGuardrails')}
              </h2>
            </div>
            <div className="space-y-6">
              {caseStudy.flow.map((flow, flowIndex) => (
                <Card key={flow.title} className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    {t(`projectDetails.${project.slug}.caseStudy.flow.${flowIndex}.title`, flow.title)}
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 list-disc list-inside">
                    {flow.steps.map((step, stepIndex) => (
                      <li key={step}>
                        {t(`projectDetails.${project.slug}.caseStudy.flow.${flowIndex}.steps.${stepIndex}`, step)}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <section>
        <div className="container-custom space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                {t('projectDetails.common.technologies')}
              </h3>
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

            {caseStudy?.technical && (
              <Card className="p-6 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {t('projectDetails.common.architecture')}
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 list-disc list-inside">
                    {caseStudy.technical.architecture.map((item, index) => (
                      <li key={item}>
                        {t(`projectDetails.${project.slug}.caseStudy.technical.architecture.${index}`, item)}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {t('projectDetails.common.experienceSystems')}
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 list-disc list-inside">
                    {caseStudy.technical.experience.map((item, index) => (
                      <li key={item}>
                        {t(`projectDetails.${project.slug}.caseStudy.technical.experience.${index}`, item)}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            )}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightboxOpen && totalScreens > 0 && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={closeLightbox}
            />
            <motion.div
              className="relative z-10 w-full max-w-5xl"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
            >
              <div className="flex items-center justify-between text-white mb-4">
                <p className="text-sm">
                  Screenshot {activeImage + 1} / {totalScreens}
                </p>
                <button
                  onClick={closeLightbox}
                  className="inline-flex items-center text-sm uppercase tracking-[0.3em] text-white/70 hover:text-white"
                >
                  {t('common.close')}
                </button>
              </div>
              <div className="relative bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={project.screenshots[activeImage]}
                  alt={`Screenshot ${activeImage + 1}`}
                  className="w-full max-h-[80vh] object-contain bg-black"
                />
                {totalScreens > 1 && (
                  <>
                    <button
                      onClick={showPrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 rounded-full p-3 hover:scale-105 transition"
                      aria-label="Previous screenshot"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={showNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 rounded-full p-3 hover:scale-105 transition"
                      aria-label="Next screenshot"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetails;
