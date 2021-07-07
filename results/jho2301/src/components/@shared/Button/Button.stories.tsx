import { Meta, Story } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Components/shared/Button',
  component: Button,
} as Meta;

const Template: Story = (args) => {
  return <Button {...args}>눌러주세요</Button>;
};

export const Default = Template.bind({});

Default.args = {};
