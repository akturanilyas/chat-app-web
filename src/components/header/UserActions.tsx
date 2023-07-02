import React from 'react';
import { twMerge } from 'tailwind-merge';
import { useNavigate } from 'react-router-dom';
import BaseText from '../common/base-text/BaseText';

const UserActions = () => {
  const navigate = useNavigate();
  const classes = twMerge(`
    p-0
    bg-transparent
    dark:bg-transparent
    active:bg-transparent
    active:dark:bg-transparent
  `);

  const dropdownItems = [
    {
      label: 'GLOBAL.BUTTONS.PROFILE',
      onClick: () => null,
    },
    {
      label: 'GLOBAL.BUTTONS.LOGOUT',
      onClick: () => null,
    },
  ];

  return <BaseText text={'dropdownItem'} />;
};

export default UserActions;
