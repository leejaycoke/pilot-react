import { Meta, Story } from '@storybook/react';

import UserInfo from './UserInfo';

export default {
  title: 'Components/UserInfo',
  component: UserInfo,
} as Meta;

const Template: Story = (args) => {
  return <UserInfo {...args} />;
};

export const Default = Template.bind({});

Default.args = {};
