import { useState, useEffect } from 'react';
import _ from 'lodash';

export const useStickyHeader = (
  thresholdUp: number = 260,
  thresholdDown: number = 140,
  delay: number = 200,
): boolean => {
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = _.throttle(() => {
      console.log(window.scrollY);
      if (window.scrollY > thresholdUp) {
        setIsSticky(true);
      } else if (window.scrollY < thresholdDown) {
        setIsSticky(false);
      }
    }, delay);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      handleScroll.cancel();
    };
  }, [thresholdUp, thresholdDown, delay]);

  return isSticky;
};
