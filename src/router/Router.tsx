import { createBrowserRouter } from 'react-router-dom';
import Start from '../pages/Start/Start';
import Layout from '../layouts/Layout';
import React from 'react';
import Home from '../pages/Home/Home';
import Feed from '../pages/Feed/Feed';
import Alarm from '../pages/Alarm/Alarm';
import Mypage from '../pages/Mypage/Mypage';
import LayoutWithFooter from '../layouts/LayoutWithFooter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Start />
      },
    ],
  },
  {
    path:'/',
    element: <LayoutWithFooter/>,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/feed',
        element: <Feed />
      },
      {
        path: '/alarm',
        element: <Alarm />
      },
      {
        path: '/mypage',
        element: <Mypage />
      },
    ]
  }
]);

export default router;