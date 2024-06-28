import { createContext, useState, useCallback } from 'react';
import type { PropsWithChildren } from 'react';

interface ReviewCarouselProviderContextProps {}

export const ReviewCarouselContext = createContext<ReviewCarouselProviderContextProps | undefined>(
  undefined,
);

function ReviewCarouselProvider({ children }: PropsWithChildren) {
  return <></>;
}

export default ReviewCarouselProvider;
