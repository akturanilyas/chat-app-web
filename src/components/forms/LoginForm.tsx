import React, { FC } from 'react';
import { LoginFormProps } from './LoginForm.interface';
import BaseView from '../common/base-view/BaseView';
import TextInput from '../inputs/TextInput';
import { FORM_RULE } from '../../constants/formRule.constant';
import { FORM_RULE_MESSAGE } from '../../constants/formRuleMessage.constant';

const LoginForm: FC<LoginFormProps> = (props) => {
  const { form, className } = props;

  return (
    <BaseView className={className}>
      <TextInput
        form={form}
        name={'username'}
        label={'GLOBAL.FORM_ELEMENTS.LABELS.USERNAME'}
        rules={FORM_RULE.REQUIRED}
        errorMessage={FORM_RULE_MESSAGE.REQUIRED}
      />
      <TextInput
        form={form}
        name={'password'}
        label={'GLOBAL.FORM_ELEMENTS.LABELS.PASSWORD'}
        rules={FORM_RULE.REQUIRED}
        errorMessage={FORM_RULE_MESSAGE.REQUIRED}
      />
    </BaseView>
  );
};

export default LoginForm;
