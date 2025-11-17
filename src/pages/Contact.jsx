import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import Card from '../components/Card';
import Button from '../components/Button';
import ContactIcon from '../components/ContactIcon';
import { contactContent } from '../data/contact';

// Keep contactContent for non-translatable data like email, hrefs, etc.

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const { form, channels, callout } = contactContent;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Check if EmailJS is configured
    if (
      form.emailjs.serviceId === 'YOUR_SERVICE_ID' ||
      form.emailjs.templateId === 'YOUR_TEMPLATE_ID' ||
      form.emailjs.publicKey === 'YOUR_PUBLIC_KEY'
    ) {
      // Fallback to mailto if EmailJS is not configured
      const subject = encodeURIComponent(`${t('contact.form.subjectPrefix', 'New message from')} ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
      );
      window.location.href = `mailto:${form.recipient}?subject=${subject}&body=${body}`;
      setIsSubmitting(false);
      return;
    }

    try {
      // Initialize EmailJS with public key
      emailjs.init(form.emailjs.publicKey);

      // Send email using EmailJS
      await emailjs.send(
        form.emailjs.serviceId,
        form.emailjs.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: form.recipient,
          subject: `${t('contact.form.subjectPrefix', 'New message from')} ${formData.name}`,
        },
      );

      // Success
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
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
              {t('contact.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t('contact.hero.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                  {t('contact.form.title')}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                    >
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder={t('contact.form.namePlaceholder')}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                    >
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder={t('contact.form.emailPlaceholder')}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                    >
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                      placeholder={t('contact.form.messagePlaceholder')}
                    />
                  </div>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg"
                    >
                      {t('contact.form.success')}
                    </motion.div>
                  )}
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg"
                    >
                      {t('contact.form.error')}
                    </motion.div>
                  )}
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                  {t('contact.channels.title')}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">{t('contact.intro')}</p>
                <div className="space-y-6">
                  {channels.map((method, index) => (
                    <motion.a
                      key={method.type}
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors group"
                    >
                      <div className="text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform">
                        <ContactIcon type={method.type} />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-gray-100">
                          {t(`contact.channels.${method.type}`)}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {method.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                  {t('contact.callout.title')}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {t('contact.callout.description')}
                </p>
                <Button href={callout.action.href} variant="primary" className="w-full">
                  {t('contact.callout.action')}
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

