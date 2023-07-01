import { ReactElement, SVGProps } from 'react';
import { CUSTOM_ICON } from '../../constants/customIcon.constant';
import { MAIN_PATH } from '../../constants/mainPath.constant';
import { translate } from '../../utils/translateUtil';

export interface ISideMenuItem {
  title: string;
  icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
  groups?: Array<string>;
  isExpand?: boolean;
  target: string;
  nestedMenu?: Array<Omit<ISideMenuItem, 'nestedMenu' | 'icon'>>;
}

const SideMenuItems: Array<ISideMenuItem> = [
  {
    title: 'GLOBAL.COMPONENTS.SIDE_MENU.DASHBOARD.TITLE',
    icon: CUSTOM_ICON.MONITOR,
    target: MAIN_PATH.DASHBOARD,
  },
  {
    title: 'GLOBAL.COMPONENTS.SIDE_MENU.SALE_MANAGEMENT.TITLE',
    icon: CUSTOM_ICON.FILE_PLUS,
    groups: [MAIN_PATH.SALE],
    target: `${MAIN_PATH.COMMERCIAL_DOC}${MAIN_PATH.SALE}${MAIN_PATH.INVOICES}`,
    nestedMenu: [
      {
        title: 'GLOBAL.COMPONENTS.SIDE_MENU.SALE_MANAGEMENT.SALE_INVOICES.TITLE',
        target: `${MAIN_PATH.COMMERCIAL_DOC}${MAIN_PATH.SALE}${MAIN_PATH.INVOICES}`,
      },
      {
        title: 'GLOBAL.COMPONENTS.SIDE_MENU.SALE_MANAGEMENT.SALE_WAYBILLS.TITLE',
        target: `${MAIN_PATH.COMMERCIAL_DOC}${MAIN_PATH.SALE}${MAIN_PATH.WAYBILLS}`,
      },
      {
        title: 'GLOBAL.COMPONENTS.SIDE_MENU.SALE_MANAGEMENT.SALE_ORDERS.TITLE',
        target: `${MAIN_PATH.COMMERCIAL_DOC}${MAIN_PATH.SALE}${MAIN_PATH.ORDERS}`,
      },
      {
        title: 'GLOBAL.COMPONENTS.SIDE_MENU.SALE_MANAGEMENT.SALE_PROFORMAS.TITLE',
        target: `${MAIN_PATH.COMMERCIAL_DOC}${MAIN_PATH.SALE}${MAIN_PATH.PROFORMAS}`,
      },
    ],
  },
  {
    title: 'GLOBAL.COMPONENTS.SIDE_MENU.PURCHASE_MANAGEMENT.TITLE',
    icon: CUSTOM_ICON.FILE_MINUS,
    groups: [MAIN_PATH.PURCHASE],
    target: `${MAIN_PATH.COMMERCIAL_DOC}${MAIN_PATH.PURCHASE}${MAIN_PATH.INVOICES}`,
    nestedMenu: [
      {
        title: 'GLOBAL.COMPONENTS.SIDE_MENU.PURCHASE_MANAGEMENT.PURCHASE_INVOICES.TITLE',
        target: `${MAIN_PATH.COMMERCIAL_DOC}${MAIN_PATH.PURCHASE}${MAIN_PATH.INVOICES}`,
      },
      {
        title: 'GLOBAL.COMPONENTS.SIDE_MENU.PURCHASE_MANAGEMENT.PURCHASE_WAYBILLS.TITLE',
        target: `${MAIN_PATH.COMMERCIAL_DOC}${MAIN_PATH.PURCHASE}${MAIN_PATH.WAYBILLS}`,
      },
      {
        title: 'GLOBAL.COMPONENTS.SIDE_MENU.PURCHASE_MANAGEMENT.PURCHASE_ORDERS.TITLE',
        target: `${MAIN_PATH.COMMERCIAL_DOC}${MAIN_PATH.PURCHASE}${MAIN_PATH.ORDERS}`,
      },
      {
        title: 'GLOBAL.COMPONENTS.SIDE_MENU.PURCHASE_MANAGEMENT.PURCHASE_PROFORMAS.TITLE',
        target: `${MAIN_PATH.COMMERCIAL_DOC}${MAIN_PATH.PURCHASE}${MAIN_PATH.PROFORMAS}`,
      },
    ],
  },
  {
    title: 'GLOBAL.COMPONENTS.SIDE_MENU.INCOME_EXPENSE.TITLE',
    icon: CUSTOM_ICON.COPY,
    groups: [MAIN_PATH.INCOME_EXPENSE],
    target: `${MAIN_PATH.INCOME_EXPENSE}${MAIN_PATH.INCOMES}`,
    nestedMenu: [
      {
        title: 'GLOBAL.COMPONENTS.SIDE_MENU.INCOME_EXPENSE.INCOME.TITLE',
        target: `${MAIN_PATH.INCOME_EXPENSE}${MAIN_PATH.INCOMES}`,
      },
      {
        title: 'GLOBAL.COMPONENTS.SIDE_MENU.INCOME_EXPENSE.EXPENSE.TITLE',
        target: `${MAIN_PATH.INCOME_EXPENSE}${MAIN_PATH.EXPENSES}`,
      },
      {
        title: 'GLOBAL.COMPONENTS.SIDE_MENU.INCOME_EXPENSE.RECURRING.TITLE',
        target: `${MAIN_PATH.INCOME_EXPENSE}${MAIN_PATH.RECURRING}`,
      },
    ],
  },
  {
    title: 'GLOBAL.COMPONENTS.SIDE_MENU.PRODUCT_SERVICES.TITLE',
    icon: CUSTOM_ICON.BOX,
    groups: [MAIN_PATH.PRODUCTS_SERVICES, MAIN_PATH.PRODUCT, MAIN_PATH.SERVICE],
    target: `${MAIN_PATH.PRODUCTS_SERVICES}${MAIN_PATH.PRODUCTS}`,
    nestedMenu: [
      {
        title: 'Products',
        target: `${MAIN_PATH.PRODUCTS_SERVICES}${MAIN_PATH.PRODUCTS}`,
      },
      {
        title: 'Services',
        target: `${MAIN_PATH.PRODUCTS_SERVICES}${MAIN_PATH.SERVICES}`,
      },
    ],
  },
  {
    title: 'GLOBAL.COMPONENTS.SIDE_MENU.ASSOCIATES.TITLE',
    icon: CUSTOM_ICON.USERS,
    groups: [MAIN_PATH.ASSOCIATES, MAIN_PATH.ASSOCIATE],
    target: MAIN_PATH.ASSOCIATES,
  },
  {
    title: 'GLOBAL.COMPONENTS.SIDE_MENU.FINANCE.TITLE',
    icon: CUSTOM_ICON.DOLLAR_SIGN,
    groups: [MAIN_PATH.FINANCE],
    target: `${MAIN_PATH.FINANCE}${MAIN_PATH.BANK}`,
    nestedMenu: [
      {
        title: translate({ value: 'GLOBAL.COMPONENTS.SIDE_MENU.FINANCE.TABS.BANK_ACCOUNTS' }),
        target: `${MAIN_PATH.FINANCE}${MAIN_PATH.BANK}`,
      },
      {
        title: translate({ value: 'GLOBAL.COMPONENTS.SIDE_MENU.FINANCE.TABS.VAULTS' }),
        target: `${MAIN_PATH.FINANCE}${MAIN_PATH.SAFE}`,
      },
      {
        title: translate({ value: 'GLOBAL.COMPONENTS.SIDE_MENU.FINANCE.TABS.TRANSACTIONS' }),
        target: `${MAIN_PATH.FINANCE}${MAIN_PATH.TRANSACTIONS}`,
      },
    ],
  },
  {
    title: 'GLOBAL.COMPONENTS.SIDE_MENU.PROJECTS.TITLE',
    icon: CUSTOM_ICON.FOLDER,
    groups: [MAIN_PATH.PROJECTS, MAIN_PATH.PROJECT],
    target: MAIN_PATH.PROJECTS,
  },
  {
    title: 'GLOBAL.COMPONENTS.SIDE_MENU.REPORTS.TITLE',
    icon: CUSTOM_ICON.BAR_CHART_2,
    groups: [MAIN_PATH.REPORTS],
    target: `${MAIN_PATH.REPORTS}${MAIN_PATH.INCOME_EXPENSE}`,
    nestedMenu: [
      {
        title: translate({ value: 'GLOBAL.COMPONENTS.SIDE_MENU.REPORTS.TABS.INCOME_EXPENSE' }),
        target: `${MAIN_PATH.REPORTS}${MAIN_PATH.INCOME_EXPENSE}`,
      },
      {
        title: translate({ value: 'GLOBAL.COMPONENTS.SIDE_MENU.REPORTS.TABS.VAT' }),
        target: `${MAIN_PATH.REPORTS}${MAIN_PATH.VAT}`,
      },
      {
        title: translate({ value: 'GLOBAL.COMPONENTS.SIDE_MENU.REPORTS.TABS.STOCK' }),
        target: `${MAIN_PATH.REPORTS}${MAIN_PATH.STOCK}`,
      },
    ],
  },
  {
    title: 'GLOBAL.COMPONENTS.SIDE_MENU.SUBSCRIPTION.TITLE',
    icon: CUSTOM_ICON.CREDIT_CART,
    target: MAIN_PATH.SUBSCRIPTION,
  },
  {
    title: 'GLOBAL.COMPONENTS.SIDE_MENU.SUPPORT.TITLE',
    icon: CUSTOM_ICON.LIFE_BUOY,
    target: MAIN_PATH.TICKETS,
  },
  {
    title: 'GLOBAL.COMPONENTS.SIDE_MENU.TASKS.TITLE',
    icon: CUSTOM_ICON.LIFE_BUOY,
    target: MAIN_PATH.TASKS,
  },
  {
    title: 'GLOBAL.COMPONENTS.SIDE_MENU.SETTINGS.TITLE',
    icon: CUSTOM_ICON.SETTINGS,
    target: `${MAIN_PATH.SETTINGS}${MAIN_PATH.PROFILE}`,
    groups: [MAIN_PATH.SETTINGS],
    nestedMenu: [
      {
        title: translate({ value: 'GLOBAL.COMPONENTS.SIDE_MENU.SETTINGS.TABS.PROFILE' }),
        target: `${MAIN_PATH.SETTINGS}${MAIN_PATH.PROFILE}`,
      },
      {
        title: translate({ value: 'GLOBAL.COMPONENTS.SIDE_MENU.SETTINGS.TABS.COMPANY' }),
        target: `${MAIN_PATH.SETTINGS}${MAIN_PATH.COMPANY}`,
      },
      {
        title: translate({ value: 'GLOBAL.COMPONENTS.SIDE_MENU.SETTINGS.TABS.INTEGRATIONS' }),
        target: `${MAIN_PATH.SETTINGS}${MAIN_PATH.INTEGRATIONS}`,
      },
      {
        title: translate({ value: 'GLOBAL.COMPONENTS.SIDE_MENU.SETTINGS.TABS.TEMPLATES' }),
        target: `${MAIN_PATH.SETTINGS}${MAIN_PATH.TEMPLATES}`,
      },
      {
        title: translate({ value: 'GLOBAL.COMPONENTS.SIDE_MENU.SETTINGS.TABS.FEATURES' }),
        target: `${MAIN_PATH.SETTINGS}${MAIN_PATH.FEATURES}`,
      },
    ],
  },
];

export default SideMenuItems;
