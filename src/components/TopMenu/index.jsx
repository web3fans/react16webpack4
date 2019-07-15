import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import './style.less';

function TopMenu(props) {
  const pathname = props.location.pathname === '/' ? '/home' : props.location.pathname;
  return (
    <div className="top-menu">
      <Menu theme="dark" mode="horizontal" selectedKeys={[pathname]}>
        <Menu.Item key="/home">
          <Link to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item key="/chart">
          <Link to="/chart">Chart</Link>
        </Menu.Item>
        <Menu.Item key="/Blog">
          <a target="_blank" rel="noopener noreferrer" href="https://blog.csdn.net/u014744118">Blog</a>
        </Menu.Item>
        <Menu.Item key="/about">
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="/contract">
          <Link to="/contract">Contract</Link>
        </Menu.Item>
      </Menu>
      {/* <img className="logo" src={Logo} alt="logo" /> */}
    </div>
  );
}

TopMenu.propTypes = {
  location: PropTypes.object.isRequired,
};

// widthRouter 为组件提供路由相关参数 location,history,match
export default withRouter(TopMenu);
