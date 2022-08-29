/* eslint-disable linebreak-style */
import { Meta } from '@storybook/react';
import Input, { InputProps } from '../../../../components/atoms/atom/Input';

export default {
  title: 'Components/Atoms/Input',
  component: Input,
} as Meta;

const Template = function (args: InputProps) {
  return <Input {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Nama Lengkap',
};
