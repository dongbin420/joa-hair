import type { Meta, StoryObj } from '@storybook/react';
import Overlay from './Overlay';

/**
 * `Overlay` 컴포넌트는 헤더의 햄버거 버튼 클릭시 나타나는 오버레이 컴포넌트 입니다.
 */
const meta = {
  title: 'Components/Overlay',
  component: Overlay,
  tags: ['autodocs'],
} satisfies Meta<typeof Overlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    toggleOverlay: () => alert('clicked!'),
  },
};
