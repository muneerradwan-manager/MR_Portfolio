import { Sms, Call, Profile2User, Facebook, Instagram } from 'iconsax-react';

const iconMap = {
  email: Sms,
  phone: Call,
  linkedin: Profile2User,
  facebook: Facebook,
  instagram: Instagram,
};

const ContactIcon = ({ type = 'email', className = '' }) => {
  const IconComponent = iconMap[type] ?? iconMap.email;
  return (
    <IconComponent 
      size={24} 
      color="currentColor" 
      variant="Bulk" 
      className={className}
      style={{ display: 'inline-block', flexShrink: 0 }}
    />
  );
};

export default ContactIcon;


