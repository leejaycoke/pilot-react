import { Meta, Story } from '@storybook/react';

import LoginForm from './LoginForm';

export default {
  title: 'Components/LoginForm',
  component: LoginForm,
} as Meta;

const Template: Story = (args) => {
  return <LoginForm {...args} />;
};

export const Default = Template.bind({});

Default.args = {};
