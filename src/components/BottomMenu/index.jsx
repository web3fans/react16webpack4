import React from 'react';
// import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { Menu } from 'antd';
// import Logo from './logo.png';
import './style.less';

function BottomMenu(props) {
  let year = new Date.getYear();
  console.log(year)
  return (
    <div className="top-menu">
      <span>@copyRight</span>
    </div>
  );
}

TopMenu.propTypes = {
  location: PropTypes.object.isRequired,
};

// widthRouter 为组件提供路由相关参数 location,history,match
export default BottomMenu;
