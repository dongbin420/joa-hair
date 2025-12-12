import { useEffect, useState } from 'react';

type Params = {
  isActive: boolean;
  onExpire: () => void;
};

export const useEmailCountdown = ({ isActive, onExpire }: Params) => {
  const [remainingSeconds, setRemainingSeconds] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    if (remainingSeconds <= 0) return;

    const id = setInterval(() => {
      setRemainingSeconds((prev) => {
        const next = Math.max(0, prev - 1);
        if (next === 0) onExpire();
        return next;
      });
    }, 1000);

    return () => clearInterval(id);
  }, [isActive, remainingSeconds, onExpire]);

  return { remainingSeconds, setRemainingSeconds };
};
