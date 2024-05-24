import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

/**
 * `Header` 컴포넌트는 프로젝트 전체에서 사용되는 헤더입니다.
 */
const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
