import React from 'react';
import { MAIN_PATH } from '../../constants/mainPath.constant';
import BaseLink from '../common/base-link/BaseLink';
import BaseView from '../common/base-view/BaseView';
import Logo from '../header/Logo';
import ChatItem from './ChatItem';
import BaseText from '../common/base-text/BaseText';

const MessageBox = () => (
    <BaseView className={''}>
      <BaseView className={'w-full'}>
        <BaseText text={'maksdm'}/>
      </BaseView>
    </BaseView>
  );

export default MessageBox;
