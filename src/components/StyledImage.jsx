export default function StyledImage({ src, alt, shape = 'rounded', className = '' }) {
  let shapeClasses = '';

  switch (shape) {
    case 'circle':
      shapeClasses = 'rounded-full';
      break;
    case 'rounded-lg':
      shapeClasses = 'rounded-lg';
      break;
    case 'rounded-tl-br':
      shapeClasses = 'rounded-tl-3xl rounded-br-3xl';
      break;
    default:
      shapeClasses = 'rounded';
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${shapeClasses} shadow-md border border-gray-200 dark:border-gray-700 ${className}`}
    />
  );
}
