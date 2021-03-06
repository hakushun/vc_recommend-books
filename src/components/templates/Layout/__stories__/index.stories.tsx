import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Layout } from '..';

export default {
  title: 'templates/Layout',
  component: Layout,
} as Meta;

const Template: Story = (args) => <Layout {...args} />;

export const Default = Template.bind({});
