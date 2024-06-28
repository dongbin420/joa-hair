import type { Meta, StoryObj } from '@storybook/react';
import ReviewCarousel from './ReviewCarousel';

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
    return <ReviewCarousel />;
  },
  args: {},
};
