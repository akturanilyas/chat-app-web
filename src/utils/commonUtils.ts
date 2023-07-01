import lodash from 'lodash';
import { UseFormReturn } from 'react-hook-form';

export interface ErrorMessagesRules {
  required?: string;
  min?: string;
  max?: string;
  maxLength?: string;
  minLength?: string;
  pattern?: string;
  validate?: string;
}

export interface GetInputErrorLabelParams {
  errorMessage: ErrorMessagesRules;
  form: UseFormReturn;
  name: string;
}

export const getInputErrorLabel = ({
  errorMessage,
  form,
  name,
}: GetInputErrorLabelParams) =>
  lodash.get(
    errorMessage,
    lodash.get(form.formState.errors, name)?.type as keyof ErrorMessagesRules,
  ) || '';
