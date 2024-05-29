import type { Meta, StoryObj } from '@storybook/react';
import ImgWrapper from './ImgWrapper';
import mainImg from '@/assets/imgs/webp/mainImg.webp';

/**
 * `ImgWrapper` 컴포넌트는 일반 이미지를 래핑하는데 사용되는 컴포넌트 입니다.
 */
const meta = {
  title: 'Components/ImgWrapper',
  component: ImgWrapper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ImgWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    img: mainImg,
    width: '350px',
    height: '500px',
    borderRadius: 20,
  },
};
