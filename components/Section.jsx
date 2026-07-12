import styles from './Section.module.css';

/**
 * A reusable layout component for defining page sections with alternating themes.
 * @param {string} variant - "dark" (default) or "light" theme.
 */
export default function Section({ 
  variant = 'dark', 
  className = '', 
  id, 
  ariaLabelledBy, 
  children 
}) {
  const variantClass = variant === 'light' ? styles.light : styles.dark;
  
  return (
    <section 
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`${styles.section} ${variantClass} ${className}`}
    >
      {children}
    </section>
  );
}
