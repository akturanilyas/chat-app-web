import lodash from 'lodash';
import React, { FC, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { CUSTOM_ICON } from '../../constants/customIcon.constant';
import CustomIconProvider from '../../providers/CustomIconProvider';
import BaseNavLink from '../common/base-nav-link/BaseNavLink';
import BaseText from '../common/base-text/BaseText';
import BaseView from '../common/base-view/BaseView';
import TextButton from '../common/button/TextButton';
import { SideMenuItemProps } from './SideMenuItem.interface';

const SideMenuItem: FC<SideMenuItemProps> = (props) => {
  const { title, icon, target, nestedMenu, groups, isExpand = false } = props;
  const ref = useRef<HTMLDivElement>(null);

  const location = useLocation();
  const pathArray = lodash.compact(location.pathname.split('/').map((item) => (item === '' ? undefined : item)));

  const [expand, setExpand] = useState<boolean>(isExpand);

  const handleGroupCheck = () => {
    const currentGroup = pathArray.length > 2 ? pathArray[1] : pathArray?.[0];
    const _groups = groups?.map((item) => item.replace('/', ''));

    setExpand(Boolean(_groups?.includes(currentGroup)));
  };

  const iconContainerClasses = twMerge(`
    mr-4
  `);

  const handleNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
    twMerge(`
      flex-row
      items-center
      py-3
      group
      grow
      w-full
      ${isActive ? 'current-page' : ''}
  `);

  const textClasses = twMerge(`
    text-slate
    dark:text-slate-200
    group-hover:text-primary dark:group-hover:text-primary-400
    group-[.current-page]:font-bold group-[.current-page]:text-primary dark:group-[.current-page]:text-primary-400
    transition
    ${expand ? 'font-bold text-primary dark:text-primary-400' : ''}
  `);

  const iconClasses = twMerge(`
    group-hover:text-primary group-hover:dark:text-primary-400
    group-[.current-page]:text-primary dark:group-[.current-page]:text-primary-400
    transition
  `);

  const parentMenuItemClasses = twMerge(`
      group/menu-item flex
      ${expand ? 'expand' : ''}
    `);

  const handleDropdownClick = () => {
    if (ref.current?.parentElement?.classList.contains('expand')) {
      setExpand(false);

      return ref.current?.parentElement?.classList.remove('expand');
    }
    setExpand(true);

    return ref.current?.parentElement?.classList.add('expand');
  };

  useEffect(() => {
    handleGroupCheck();
  }, [location]);

  return (
    <BaseView className={parentMenuItemClasses}>
      <BaseView className={'flex-row justify-between group'} ref={ref}>
        <BaseNavLink to={target} className={handleNavLinkClasses}>
          <BaseView className={'flex-row items-center'}>
            <BaseView className={iconContainerClasses}>
              <CustomIconProvider icon={icon} customSize={16} iconClassName={iconClasses} />
            </BaseView>
            <BaseText text={title} className={textClasses} />
          </BaseView>
        </BaseNavLink>
        {nestedMenu && (
          <TextButton
            name={target}
            icon={{
              icon: CUSTOM_ICON[expand ? 'CHEVRON_UP' : 'CHEVRON_DOWN'],
              customSize: 16,
              iconClassName: iconClasses,
            }}
            onClick={handleDropdownClick}
          />
        )}
      </BaseView>
    </BaseView>
  );
};

export default SideMenuItem;
