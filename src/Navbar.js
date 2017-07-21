import React, { Component } from 'react';
import { Menu, Icon, Button } from 'antd';

const Navbar = (props) => {

  return (
    <div>
      <Menu
        defaultSelectedKeys={['0']}
        mode="inline"
        theme="dark"
        inlineCollapsed={false}
        onClick={ props.onNavbarChange}
      >
        <Menu.Item key="0">
          <Icon type="double-right" />
          <span>Speed</span>
        </Menu.Item>
        <Menu.Item key="1">
          <Icon type="star" />
          <span>Special Defense</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="star-o" />
          <span>Special Attack</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="api" />
          <span>Defense</span>
        </Menu.Item>
        <Menu.Item key="4">
          <Icon type="rocket" />
          <span>Attack</span>
        </Menu.Item>
        <Menu.Item key="5">
          <Icon type="heart-o" />
          <span>Hit Points</span>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Navbar;
