import React from 'react';
import './layout.scss';
import { Outlet } from 'react-router-dom';
import { SideMenu } from '../../components';
import { HeaderNav } from '../../components/header-nav/HeaderNav';

export const Layout = () => {
  return (
    <div className='layout'>
      <HeaderNav />
      <SideMenu />
      <div className='main'>
        <Outlet />
      </div>
    </div>
  );
};
