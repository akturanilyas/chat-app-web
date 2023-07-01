import { addModal, clearAllModals, removeCurrentModal, removeModal } from '../redux/slices/modalSlice';
import { OpenModalType } from './useModalDispatcher.interface';
import { useAppDispatch } from './useRedux';

const useModalDispatcher = () => {
  const dispatch = useAppDispatch();

  const openModal = ({ name, eventName, props }: OpenModalType) => {
    dispatch(addModal({ name, eventName, props }));
  };

  const closeModal = ({ name }: OpenModalType) => {
    dispatch(removeModal({ name }));
  };

  const goBackModal = () => {
    dispatch(removeCurrentModal());
  };

  const closeAllModals = () => dispatch(clearAllModals());

  return {
    openModal,
    closeModal,
    goBackModal,
    closeAllModals,
  };
};

export default useModalDispatcher;
