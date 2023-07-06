import React, { FC } from 'react';
import { AddFriendInputProps } from './AddFriendInput.interface';
import Select from '../select/Select';

const AddFriendInput: FC<AddFriendInputProps> = (props) => {
  const { form } = props;

  return <Select form={form} name={'friend'} />;
};

export default AddFriendInput;
