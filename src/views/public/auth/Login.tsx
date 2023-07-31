import React from 'react';
import BaseView from '../../../components/common/base-view/BaseView';
import LoginForm from '../../../components/forms/auth/LoginForm';
import { useForm } from 'react-hook-form';
import BaseButton from '../../../components/common/base-button/BaseButton';
import { useLoginMutation } from '../../../api/services/auth/authService';
import BaseLink from '../../../components/common/base-link/BaseLink';
import { PUBLIC_PATH } from '../../../constants/publicPath.constant';
import { useLazySelfQuery } from '../../../api/services/user/userService';
import Logo from '../../../components/header/Logo';

const Login = () => {
  const form = useForm();

  const [login] = useLoginMutation();
  const [getSelf] = useLazySelfQuery();

  const loginCallback = (payload: Record<string, unknown>) => {
    login({ body: payload })
      .unwrap()
      .then(() => {
        getSelf();
      });
  };

  return (
    <BaseView className={'items-center justify-center h-[100vh]'}>
      <BaseView className={'sm:w-1/2 m:1/3 lg:w-1/3 xl:w-1/3'}>
        <BaseView className={'border rounded-md p-8 gap-4'}>
          <Logo className={'self-center my-4'} />

          <LoginForm form={form} />

          <BaseView className={'w-full flex border-slate-300'}>
            <BaseView className={'flex-row-reverse w-full items-end gap-4'}>
              <BaseButton
                label={'GLOBAL.BUTTONS.LOGIN'}
                onClick={form.handleSubmit(loginCallback)}
                className={'bg-slate-500'}
              />
            </BaseView>

            <BaseLink
              to={PUBLIC_PATH.REGISTER}
              label={'GLOBAL.BUTTONS.DONT_HAVE_ACCOUNT'}
              textClassName={'text-slate-400'}
            />
          </BaseView>
        </BaseView>
      </BaseView>
    </BaseView>
  );
};

export default Login;
