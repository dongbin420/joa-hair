import { useState } from 'react';

export const useOverlayToggle = () => {
  const [isOverlayOpen, setOverlayOpen] = useState(false);

  const toggleOverlay = () => {
    setOverlayOpen(!isOverlayOpen);
  };

  return { isOverlayOpen, toggleOverlay };
};
