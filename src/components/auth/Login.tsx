import React from 'react';
import BaseView from '../common/base-view/BaseView';
import LoginForm from '../forms/LoginForm';
import { useForm } from 'react-hook-form';
import BaseButton from '../common/base-button/BaseButton';
import { useLoginMutation } from '../../api/services/auth/authService';

const Login = () => {
  const form = useForm();

  const [login] = useLoginMutation();

  const loginCallback = (payload: Record<string, unknown>) => {
    login({ body: payload });
  };

  return (
    <BaseView className={'items-center justify-center h-[100vh]'}>
      <LoginForm form={form} />
      <BaseButton
        label={'GLOBAL.BUTTONS.LOGIN'}
        onClick={form.handleSubmit(loginCallback)}
      />
    </BaseView>
  );
};

export default Login;
