import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './Accordion';
import { CONTACT_QUESTIONS } from '@/constants/text';

/**
 * `Accordion` 컴포넌트는 공용 Accordion 컴포넌트입니다.
 */
const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <Accordion>
        {CONTACT_QUESTIONS.map((question, questionIdx) => (
          <Accordion.Item key={questionIdx}>
            <Accordion.Header idx={questionIdx}>{question.question}</Accordion.Header>
            <Accordion.Body idx={questionIdx}>{question.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    );
  },
  args: {},
};
