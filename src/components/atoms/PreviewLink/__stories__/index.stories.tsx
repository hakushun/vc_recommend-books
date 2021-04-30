import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { PreviewLink, Props } from '..';

export default {
  title: 'atoms/PreviewLink',
  component: PreviewLink,
} as Meta;

const Template: Story<Props> = (args) => <PreviewLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  link: '#',
};
