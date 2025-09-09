import type { Meta, StoryObj } from '@storybook/react';
import App from '../src/App';

const meta: Meta<typeof App> = {
  title: 'App',
  component: App,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof App>;

export const Default: Story = {
  render: () => <App />,
};
