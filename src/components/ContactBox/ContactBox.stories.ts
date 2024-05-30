import type { Meta, StoryObj } from '@storybook/react';
import ContactBox from './ContactBox';

/**
 * `ContactBox` 컴포넌트는 CONTACT 페이지에서 쓰이는 CONTACT 정보를 담은 컴포넌트 입니다.
 */
const meta = {
  title: 'Components/ContactBox',
  component: ContactBox,
  tags: ['autodocs'],
} satisfies Meta<typeof ContactBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
