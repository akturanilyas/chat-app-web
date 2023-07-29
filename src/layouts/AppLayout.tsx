import { isEmpty } from 'lodash';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BaseView from '../components/common/base-view/BaseView';
import { useMain } from '../hooks/useSlices';
import mainRoute from '../routes/mainRoute';
import publicRoute from '../routes/publicRoute';
import MainLayout from './MainLayout';
import PublicLayout from './PublicLayout';

const AppLayout = () => {
  const { user } = useMain();

  const getRoute = () => {
    if (isEmpty(user)) {
      return publicRoute;
    }

    return mainRoute;
  };

  const RouteLayout = isEmpty(user) ? PublicLayout : MainLayout;

  return (
    <BaseView>
      <BrowserRouter>
        <RouteLayout>
          <Routes>
            {getRoute().map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </RouteLayout>
      </BrowserRouter>
    </BaseView>
  );
};

export default AppLayout;
