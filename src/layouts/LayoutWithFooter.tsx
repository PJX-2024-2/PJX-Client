import React from 'react';
import { useMobile } from '../hooks/useMobile';
import { Outlet } from 'react-router-dom';
import GNB from '../components/GNB/GNB';

const LayoutWithFooter = () => {
  useMobile();

  return (
    <>
      <Outlet />
      <GNB/>
    </>
  );
};

export default LayoutWithFooter;