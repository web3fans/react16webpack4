import React from 'react';
import { Card } from 'antd';

const Contract = () => (
  <div className='contract-container' style={{height:document.body.clientHeight-120}}>
      <Card title="Contract Me" bordered={false}>
          <p>WeChat：rockyman1020</p>
          <p>Email：sa514163@mail.ustc.edu.cn</p>
      </Card>
  </div>
);

export default Contract;
