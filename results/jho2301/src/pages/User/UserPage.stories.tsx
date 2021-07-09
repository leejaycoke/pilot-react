import { Meta, Story } from '@storybook/react';

import UserPage from './UserPage';

export default {
  title: 'Pages/User',
  component: UserPage,
} as Meta;

const Template: Story = (args) => {
  return <UserPage {...args} />;
};

export const Default = Template.bind({});

Default.args = {};
