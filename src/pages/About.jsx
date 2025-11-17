import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Card from '../components/Card';
import { aboutData } from '../data/about';
import { profile } from '../data/profile';
import { experiences } from '../data/experience';
import { hobbies } from '../data/hobbies';

const About = () => {
  const { t } = useTranslation();
  
  const experienceTimeline = experiences.map((exp) => ({
    ...exp,
    bullets: aboutData.experienceDetails[exp.id] ?? [],
  }));

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
              {t('about.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">{t('about.hero.subtitle')}</p>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">{t('about.hero.summary')}</p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {aboutData.contact.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-200 shadow-sm hover:shadow"
                >
                  <span className="font-semibold">{contact.label}:</span>
                  <span>{contact.value}</span>
                </a>
              ))}
            </div>
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
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">{t('about.story.title')}</h2>
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>{t('about.story.paragraph1')}</p>
                <p>{t('about.story.paragraph2')}</p>
                <p>{t('about.story.paragraph3')}</p>
              </div>
            </motion.div>
          </Card>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
              <p className="text-xs uppercase tracking-[0.4em] text-primary-500">{t('about.stats.experience.label')}</p>
              <p className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-2">{t('about.stats.experience.value')}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{t('about.stats.experience.detail')}</p>
            </Card>
            <Card className="p-6 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
              <p className="text-xs uppercase tracking-[0.4em] text-primary-500">{t('about.stats.roles.label')}</p>
              <p className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-2">{t('about.stats.roles.value')}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{t('about.stats.roles.detail')}</p>
            </Card>
            <Card className="p-6 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
              <p className="text-xs uppercase tracking-[0.4em] text-primary-500">{t('about.stats.focus.label')}</p>
              <p className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-2">{t('about.stats.focus.value')}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{t('about.stats.focus.detail')}</p>
            </Card>
          </div>
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
            {t('about.skills.title')}
          </motion.h2>
          <Card className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <p className="text-xs uppercase tracking-[0.4em] text-primary-500 mb-4">{t('about.skills.coreSkills')}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {profile.skills.map((skill) => (
                    <div key={skill} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary-500" />
                      <p className="text-gray-700 dark:text-gray-200 text-sm">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-primary-500 mb-4">{t('about.skills.languages')}</p>
                <div className="space-y-3">
                  {profile.languages.map((language) => (
                    <div key={language.name}>
                      <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{language.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{language.level}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
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
            {t('about.experience.title')}
          </motion.h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {experienceTimeline.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Card className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-primary-500">{exp.role}</p>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{exp.company}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{exp.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                        {exp.startDate} – {exp.endDate}
                      </p>
                      <p className="text-xs uppercase tracking-[0.25em] text-gray-400">{exp.employmentType}</p>
                    </div>
                  </div>
                  {exp.bullets?.length > 0 && (
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      {exp.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-white dark:bg-gray-900">
              <p className="text-xs uppercase tracking-[0.4em] text-primary-500 mb-4">{t('about.education.title')}</p>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{profile.education.degree}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{profile.education.institution}</p>
                </div>
                <p className="text-sm font-semibold text-primary-600 dark:text-primary-400">{profile.education.years}</p>
              </div>
              <div className="mt-6 space-y-3 text-sm text-gray-600 dark:text-gray-300">
                {profile.education.highlights.map((highlight) => (
                  <p key={highlight}>{highlight}</p>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="py-16">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100"
          >
            {t('about.hobbies.title')}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={hobby.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full text-center hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{hobby.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {hobby.category}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {hobby.description}
                  </p>
                  {hobby.favorite && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-xs uppercase tracking-[0.2em] text-primary-500 mb-1">{t('about.hobbies.favorite', 'Favorite')}</p>
                      <p className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                        {hobby.favorite}
                      </p>
                    </div>
                  )}
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

