import { useEffect } from 'react';
import { useLocation } from 'react-router';

/**
 * 
 * Component to help with scroll positioning after navigation with `react-router-dom` 
 */
const ScrollManager = () => {
  const { hash, pathname} = useLocation();

  useEffect(() => {
    if (pathname && hash) {
      const targetElement = document.getElementById(hash.substring(1)); // Remove the '#' from the hash
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return null;
}

export default ScrollManager;
