import { createContext, useState } from 'react';
import type { PropsWithChildren } from 'react';

interface AccordionContextProps {
  activeIndex: number | null;
  toggleAccordion: (index: number) => void;
}

export const AccordionContext = createContext<AccordionContextProps | undefined>(undefined);

function AccordionProvider({ children }: PropsWithChildren) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <AccordionContext.Provider value={{ activeIndex, toggleAccordion }}>
      {children}
    </AccordionContext.Provider>
  );
}

export default AccordionProvider;
