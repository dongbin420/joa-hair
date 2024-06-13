import type { Meta, StoryObj } from '@storybook/react';
import InstagramGrid from './InstagramGrid';
import { useFetchGalleryPosts } from '@/hooks/useFetchGalleryPosts';

/**
 * `InstagramGrid` 컴포넌트
 */
const meta = {
  title: 'Components/InstagramGrid',
  component: InstagramGrid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InstagramGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return <InstagramGrid useFetch={useFetchGalleryPosts} />;
  },
  args: { useFetch: useFetchGalleryPosts },
};
