import { useState, useEffect } from 'react';

export const useOverlayToggle = () => {
  const [isOverlayOpen, setOverlayOpen] = useState(false);

  useEffect(() => {
    if (isOverlayOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isOverlayOpen]);

  const toggleOverlay = () => {
    setOverlayOpen(!isOverlayOpen);
  };

  return { isOverlayOpen, toggleOverlay };
};
