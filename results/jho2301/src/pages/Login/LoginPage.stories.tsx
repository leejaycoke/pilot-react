import { Meta, Story } from '@storybook/react';

import LoginPage from './LoginPage';

export default {
  title: 'Pages/Login',
  component: LoginPage,
} as Meta;

const Template: Story = (args) => {
  return <LoginPage {...args} />;
};

export const Default = Template.bind({});

Default.args = {};
