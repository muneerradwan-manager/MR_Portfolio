import { contactIconPaths } from '../data/icons';

const ContactIcon = ({ type = 'email', className = 'w-6 h-6' }) => {
  const shapes = contactIconPaths[type] ?? contactIconPaths.email;

  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      {shapes.map((shape, index) => {
        const Element = shape.element;
        return <Element key={`${type}-${index}`} {...shape.props} />;
      })}
    </svg>
  );
};

export default ContactIcon;


