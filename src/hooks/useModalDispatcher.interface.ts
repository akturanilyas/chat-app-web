import { ModalName } from '../enums/modalName.enum';

export type OpenModalType = {
  name: ModalName;
  eventName?: string;
  props?: Record<string, unknown>;
};
