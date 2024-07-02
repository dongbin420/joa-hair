import ReviewCarouselProvider from './ReviewCarouselProvider/ReviewCarouselProvider';
import ReviewCarouselContainer from './ReviewCarouselContainer/ReviewCarouselContainer';
import ReviewCarouselIndicator from './ReviewCarouselIndicator/ReviewCarouselIndicator';
import ReviewCarouselButton from './ReviewCarouselButton/ReviewCarouselButton';
import ReviewCarouselInner from './ReviewCarouselInner/ReviewCarouselInner';
import ReviewCarouselItem from './ReviewCarouselItem/ReviewCarouselItem';
import type { PropsWithChildren } from 'react';

interface ReviewCarouselProps {
  total: number;
}

function ReviewCarousel({ children, total }: PropsWithChildren<ReviewCarouselProps>) {
  return <ReviewCarouselProvider total={total}>{children}</ReviewCarouselProvider>;
}

ReviewCarousel.ReviewCarouselContainer = ReviewCarouselContainer;
ReviewCarousel.ReviewCarouselIndicator = ReviewCarouselIndicator;
ReviewCarousel.ReviewCarouselButton = ReviewCarouselButton;
ReviewCarousel.ReviewCarouselInner = ReviewCarouselInner;
ReviewCarousel.ReviewCarouselItem = ReviewCarouselItem;

export default ReviewCarousel;
