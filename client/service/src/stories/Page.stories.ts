import type { Meta, StoryObj } from '@storybook/react';

import { Page } from './Page';

const meta = {
  title: 'readme/Page',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const readme: Story = {};
