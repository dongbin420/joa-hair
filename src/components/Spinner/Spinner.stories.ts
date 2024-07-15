import type { Meta, StoryObj } from '@storybook/react';
import Spinner from './Spinner';

/**
 * `Spinner` 컴포넌트는 각 페이지를 lazy 렌더링 하는 과정에서 해당 컴포넌트가 렌더링 되기 이전 fallback으로 쓰이는 로딩 스피너 컴포넌트 입니다.
 */
const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
