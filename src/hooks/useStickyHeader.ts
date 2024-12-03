import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

export const useStickyHeader = (threshold: number = 299, delay: number = 200): boolean => {
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (window.scrollY > threshold) {
        setIsSticky(true);
      } else if (window.scrollY < threshold) {
        setIsSticky(false);
      }
    }, delay);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      handleScroll.cancel();
    };
  }, [threshold, delay]);

  return isSticky;
};
