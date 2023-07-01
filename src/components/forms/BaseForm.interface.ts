import { UseFormReturn } from 'react-hook-form';

export interface OnFormChangeParams {
  value?: boolean | Record<string, unknown>;
  formName?: string;
}

export interface BaseFormProps {
  form: UseFormReturn;
  className?: string;
  onFormChange?: ({ value, formName }: OnFormChangeParams) => void;
}
