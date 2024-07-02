import { useContext } from 'react';
import { ReviewCarouselContext } from '@/components/ReviewCarousel/ReviewCarouselProvider/ReviewCarouselProvider';

export const useReviewCarouselContext = () => {
  const context = useContext(ReviewCarouselContext);

  if (!context) {
    throw new Error('useReviewCarouselContext must be used within an ReviewCarouselProvider');
  }

  return context;
};
