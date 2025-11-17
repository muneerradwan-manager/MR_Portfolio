export const contactContent = {
  hero: {
    title: 'Get In Touch',
    description: "Have a project in mind or want to collaborate? I'd love to hear from you!",
  },
  intro:
    'Feel free to reach out through any of these channels. I typically respond within 24 hours.',
  form: {
    recipient: 'firebase.projects.1997@gmail.com',
    subjectPrefix: 'New message from',
    submitLabel: 'Send Message',
    // EmailJS Configuration - Get these from https://www.emailjs.com/
    emailjs: {
      serviceId: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      templateId: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      publicKey: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
    },
  },
  channels: [
    {
      type: 'email',
      label: 'Email',
      value: 'firebase.projects.1997@gmail.com',
      href: 'mailto:firebase.projects.1997@gmail.com',
    },
    {
      type: 'phone',
      label: 'Phone / WhatsApp',
      value: '+963-947446326',
      href: 'https://wa.me/963947446326',
    },
    {
      type: 'linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/muneer-radwan-3b7543352',
      href: 'https://www.linkedin.com/in/muneer-radwan-3b7543352',
    },
    {
      type: 'facebook',
      label: 'Facebook',
      value: 'facebook.com/muneerradwan',
      href: 'https://www.facebook.com/share/1AKRMYWBEh/',
    },
    {
      type: 'instagram',
      label: 'Instagram',
      value: '@muneerradwan1997',
      href: 'https://www.instagram.com/muneerradwan1997?igsh=MXVxaDFseDQzbDBpOA==',
    },
  ],
  callout: {
    title: "Let's Work Together",
    description:
      "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
    action: {
      label: 'Start a Conversation',
      href: 'https://wa.me/963947446326',
    },
  },
};


