import React from 'react';
import './App.css';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import LoadingProvider from './providers/LoadingProvider';
import ModalProvider from './providers/ModalProvider';
import AppLayout from './layouts/AppLayout';
import './i18n/config';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppLayout />
        <ModalProvider />
        <LoadingProvider />
      </PersistGate>
    </Provider>
  );
}

export default App;
