import React from 'react';
import BaseView from '../components/common/base-view/BaseView';
import { CUSTOM_ICON } from '../constants/customIcon.constant';
import { useGlobalLoading } from '../hooks/useSlices';
import CustomIconProvider from './CustomIconProvider';

const LoadingProvider = () => {
  const { loading } = useGlobalLoading();

  return loading > 0 ? (
    <BaseView
      className={`
        w-full h-[100vh] 
        justify-center items-center 
        bg-black/20 dark:bg-white/20 
        backdrop-blur
        fixed top-0 left-0 z-50
      `}
    >
      <BaseView className={'animate-spin'}>
        <CustomIconProvider
          name={'loading'}
          icon={CUSTOM_ICON.LOADER}
          customSize={34}
          iconClassName={'text-slate-200 dark:text-white'}
        />
      </BaseView>
    </BaseView>
  ) : null;
};

export default LoadingProvider;
