import React, { FC } from 'react';
import BaseView from '../../common/base-view/BaseView';
import TextInput from '../../inputs/TextInput';
import { FORM_RULE } from '../../../constants/formRule.constant';
import { FORM_RULE_MESSAGE } from '../../../constants/formRuleMessage.constant';
import { AddFriendFormProps } from './AddFriendForm.interface';

const AddFriendForm: FC<AddFriendFormProps> = (props) => {
  const { form, className } = props;

  return (
    <BaseView className={className}>

    </BaseView>
  );
};

export default AddFriendForm;
