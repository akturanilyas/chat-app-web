import * as i18n from 'i18next';

export const translate = ({
  value,
  options = {},
}: {
  value: string;
  options?: Record<string, unknown>;
}) => i18n.t(value, options);

export const capitalizeTranslate = ({ value, options = {} }: { value: string; options?: Record<string, unknown> }) =>
  translate({ value, options }).toUpperCase();
