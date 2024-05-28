import type { Meta, StoryObj } from '@storybook/react';
import PageBanner from './PageBanner';
import bannerImg1 from '@/assets/imgs/webp/bannerImg1.webp';
import bannerImg2 from '@/assets/imgs/webp/bannerImg2.webp';
import bannerImg3 from '@/assets/imgs/webp/bannerImg3.webp';
import bannerImg4 from '@/assets/imgs/webp/bannerImg4.webp';
import * as C from '@/constants/bannerContent';

/**
 * `PageBanner` 컴포넌트는 각 페이지의 타이틀 및 설명을 포함하는 배너 컴포넌트입니다.
 */
const meta = {
  title: 'Components/PageBanner',
  component: PageBanner,
  tags: ['autodocs'],
} satisfies Meta<typeof PageBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ABOUT: Story = {
  args: {
    img: bannerImg1,
    content: C.ABOUT_CONTENT,
  },
};

export const SERVICES: Story = {
  args: {
    img: bannerImg2,
    content: C.SERVICES_CONTENT,
  },
};

export const GALLERY: Story = {
  args: {
    img: bannerImg3,
    content: C.GALLERY_CONTENT,
  },
};

export const CONTACT: Story = {
  args: {
    img: bannerImg4,
    content: C.CONTACT_CONTENT,
  },
};
