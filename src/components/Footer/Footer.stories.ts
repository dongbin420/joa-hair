import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Footer from './Footer';

/**
 * `Footer` 컴포넌트는 프로젝트 전체에서 사용되는 풋터입니다.
 */
const meta = {
  title: 'Components/Footer',
  component: Footer,
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
