import type { Meta, StoryObj } from '@storybook/react';
import ImageCarousel from './ImageCarousel';
import { pepeImgCarouselSrc } from '@/constants/imgCarouselSrc';

/**
 * `ImageCarousel` 컴포넌트는 여러 이미지를 슬라이드로 보여주는 컴포넌트 입니다.
 */
const meta = {
  title: 'Components/ImageCarousel',
  component: ImageCarousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ImageCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <ImageCarousel total={pepeImgCarouselSrc.length}>
        <ImageCarousel.ImageCarouselContainer width={'800px'} height={'500px'}>
          <ImageCarousel.ImageCarouselIndicator />
          <ImageCarousel.ImageCarouselInner>
            <ImageCarousel.ImageCarouselItem
              imgSrc={pepeImgCarouselSrc[pepeImgCarouselSrc.length - 1]}
            />
            {pepeImgCarouselSrc.map((src, idx) => (
              <ImageCarousel.ImageCarouselItem key={idx} imgSrc={src} />
            ))}
            <ImageCarousel.ImageCarouselItem imgSrc={pepeImgCarouselSrc[0]} />
          </ImageCarousel.ImageCarouselInner>
          <ImageCarousel.ImageCarouselButton />
        </ImageCarousel.ImageCarouselContainer>
      </ImageCarousel>
    );
  },
  args: { total: pepeImgCarouselSrc.length },
};
