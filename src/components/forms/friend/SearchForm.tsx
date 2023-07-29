import React, { FC } from 'react';
import BaseView from '../../common/base-view/BaseView';
import { SearchFormProps } from './AddFriendForm.interface';
import TextInput from '../../inputs/TextInput';

const SearchForm: FC<SearchFormProps> = (props) => {
  const { form, className } = props;

  return (
    <BaseView className={className}>
      <TextInput form={form} name={'search'} label={'GLOBAL.FORM_ELEMENTS.LABELS.SEARCH'} />
    </BaseView>
  );
};

export default SearchForm;
