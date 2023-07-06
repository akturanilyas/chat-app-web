import React, { FC } from 'react';
import BaseView from '../../common/base-view/BaseView';
import { AddFriendFormProps } from './AddFriendForm.interface';
import TextInput from '../../inputs/TextInput';

const AddFriendForm: FC<AddFriendFormProps> = (props) => {
  const { form, className } = props;

  return (
    <BaseView className={className}>
      <TextInput form={form} name={'name'} label={'GLOBAL.FORM_ELEMENTS.LABELS.SEARCH'} />
    </BaseView>
  );
};

export default AddFriendForm;
