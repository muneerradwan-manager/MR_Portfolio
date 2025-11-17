import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ContactIcon from './ContactIcon';
import { footerContent } from '../data/navigation';
import { contactContent } from '../data/contact';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const { brand, quickLinks } = footerContent;
  const contactLinks = contactContent.channels;

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent mb-4">
              {brand.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {brand.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Connect</h4>
            <div className="flex space-x-4">
              {contactLinks.map((channel) => (
                <motion.a
                  key={channel.label}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={channel.label}
                >
                  <ContactIcon type={channel.type} className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; {currentYear} Muneer Radwan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

