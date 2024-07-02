import type { Meta, StoryObj } from '@storybook/react';
import ReviewCarousel from './ReviewCarousel';
import { storybookText } from '@/constants/reviewData';

/**
 * `ReviewCarousel` 컴포넌트는 여러 리뷰들을 슬라이드로 보여주는 컴포넌트 입니다.
 */
const meta = {
  title: 'Components/ReviewCarousel',
  component: ReviewCarousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ReviewCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <ReviewCarousel total={storybookText.length}>
        <ReviewCarousel.ReviewCarouselContainer width={'800px'} height={'500px'}>
          <ReviewCarousel.ReviewCarouselIndicator />
          <ReviewCarousel.ReviewCarouselInner>
            <ReviewCarousel.ReviewCarouselItem data={storybookText[storybookText.length - 1]} />
            {storybookText.map((data, idx) => (
              <ReviewCarousel.ReviewCarouselItem key={idx} data={data} />
            ))}
            <ReviewCarousel.ReviewCarouselItem data={storybookText[0]} />
          </ReviewCarousel.ReviewCarouselInner>
          <ReviewCarousel.ReviewCarouselButton />
        </ReviewCarousel.ReviewCarouselContainer>
      </ReviewCarousel>
    );
  },
  args: { total: storybookText.length },
};
