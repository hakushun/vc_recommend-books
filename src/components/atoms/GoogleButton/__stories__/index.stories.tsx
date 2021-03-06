import React from 'react';
import { Story, Meta } from '@storybook/react';
import { GoogleButton, Props } from '..';

export default {
  title: 'atoms/GoogleButton',
  component: GoogleButton,
} as Meta;

const Template: Story<Props> = (args) => <GoogleButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  signinWithGoogle: () => Promise.resolve(),
};
