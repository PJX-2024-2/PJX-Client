import { createBrowserRouter } from 'react-router-dom';
import Start from '../pages/Start/Start';
import Layout from '../layouts/Layout';
import React from 'react';
import Onboarding from '../pages/Onboarding/Onboarding';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Start />
      },{
        path: '/onboarding',
        element: <Onboarding />,
      },
    ],
  },
]);

export default router;