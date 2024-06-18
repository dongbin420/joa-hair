import type { Meta, StoryObj } from '@storybook/react';
import InstagramGrid from './InstagramGrid';
import { useFetchPostsForStorybook } from '@/hooks/useFetchPostsForStorybook';

/**
 * 메인페이지 및 갤러리 페이지에 사용되는 `InstagramGrid` 컴포넌트입니다.
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
    return <InstagramGrid useFetch={useFetchPostsForStorybook} />;
  },
  args: { useFetch: useFetchPostsForStorybook },
};
