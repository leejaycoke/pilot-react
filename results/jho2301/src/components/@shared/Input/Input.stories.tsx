import { Meta, Story } from '@storybook/react';

import Input from './Input';

export default {
  title: 'Components/shared/Input',
  component: Input,
} as Meta;

const Template: Story = (args) => {
  return <Input {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  placeholder: '입력해주세요.',
};
