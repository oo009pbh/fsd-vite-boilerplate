import type { Meta, StoryObj } from '@storybook/react';

import Button from '@atom/Button';

const meta = {
  title: 'common/component/atom/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    variant: 'primary',
    label: '구독하기',
    size: 'large',
  },
};

export const linedBlack: Story = {
  args: {
    variant: 'linedBlack',
    label: '구독하기',
    size: 'large',
  },
};

export const linedWhite: Story = {
  args: {
    variant: 'linedWhite',
    label: '구독하기',
    size: 'large',
  },
  parameters: {
    backgrounds: { default: '#F8F8FA' },
  },
};
