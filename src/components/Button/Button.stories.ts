import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from './Button';

/**
 * `Button` 컴포넌트는 공용 버튼 컴포넌트입니다.
 */
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Small: Story = {
  args: {
    children: 'Button',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    children: 'Button',
    size: 'large',
  },
};
