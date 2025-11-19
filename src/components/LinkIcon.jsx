import { GooglePlay, Apple, GoogleDrive, Global } from 'iconsax-react';

const iconMap = {
  playstore: GooglePlay,
  appstore: Apple,
  drive: GoogleDrive,
  web: Global,
};

const LinkIcon = ({ type = 'web', className = '' }) => {
  const IconComponent = iconMap[type] ?? iconMap.web;
  return (
    <IconComponent 
      size={16} 
      color="currentColor" 
      variant="Bulk" 
      className={className}
      style={{ display: 'inline-block', flexShrink: 0 }}
    />
  );
};

export default LinkIcon;


