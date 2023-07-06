import React from 'react';
import BaseView from '../../../components/common/base-view/BaseView';
import { useForm } from 'react-hook-form';
import BaseButton from '../../../components/common/base-button/BaseButton';
import { useRegisterMutation } from '../../../api/services/auth/authService';
import RegisterForm from '../../../components/forms/auth/RegisterForm';
import BaseLink from '../../../components/common/base-link/BaseLink';
import { PUBLIC_PATH } from '../../../constants/publicPath.constant';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const form = useForm();

  const navigate = useNavigate();

  const [register] = useRegisterMutation();

  const registerCallback = (payload: Record<string, unknown>) => {
    register({ body: payload })
      .unwrap()
      .then(() => navigate(PUBLIC_PATH.LOGIN));
  };

  return (
    <BaseView className={'items-center justify-center h-[100vh] w-full'}>
      <BaseView className={'sm:w-1/2 m:1/3 lg:w-1/3 xl:w-1/4'}>
        <RegisterForm form={form} />

        <BaseView className={'w-full flex border-slate-300'}>
          <BaseView className={'flex-row-reverse w-full items-end gap-4'}>
            <BaseButton
              label={'GLOBAL.BUTTONS.LOGIN'}
              onClick={form.handleSubmit(registerCallback)}
            />
          </BaseView>

          <BaseLink
            to={PUBLIC_PATH.LOGIN}
            label={'GLOBAL.BUTTONS.ALREADY_HAVE_ACCOUNT'}
            textClassName={'text-slate-400'}
          />
        </BaseView>
      </BaseView>
    </BaseView>
  );
};

export default Register;
