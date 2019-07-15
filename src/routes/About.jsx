import React from 'react';
import { Card } from 'antd';

const About = () => (
  <div style={{ padding: '60px 20px',display:'flex',height:document.body.clientHeight-120 }}>
    <div>
      <Card title="个人简介" bordered={false}>
          <p>罗天辉，现居上海，毕业于中国科学技术大学软件工程专业，web前端软件工程师。</p>
      </Card>
      <Card title="工作经历" bordered={false}>
          <p>2016.12-至今&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;万得信息技术股份有限公司	前端开发工程师</p>
          <p>2016.03-2016.07	百度                        研二实习</p>
          <p>2015.07-2016.03	英特尔亚太研究院            研二实习</p>
          <p>2010.07-2013.06   中兴通讯股份有限公司        售前技术支持工程师</p>
      </Card>
      <Card title="知识结构/技能" style={{textAlign: 'justify'}} bordered={false}> 
          <p>语言基础：熟悉Html/CSS/JavaScript/C/C++，了解Java/Python/PHP。</p>
          <p>框架和库：熟悉前端框架React及React全家桶，熟悉jQuery，了解Node.js及Express/Koa2框架，了解Webpack4,了解Vue。</p>
          <p>数据结构：熟悉常见数据结构及其算法设计实现，了解复杂数据结构。</p>
          <p>网络知识：熟悉通信网络基本知识，了解计算机网络原理，了解数据库基本操作和操作系统基本原理。</p>
          <p>开源项目：主要关注React、ECharts、HighCharts、Antd和G6，看过部分React源码，并根据项目情况修改过Echarts源码。</p>
          <p>人工智能：参加过公司组织的人工智能培训课程体系，了解机器学习、自然语言处理和人工智能相关技术。</p>
      </Card>
    </div>
  </div>
);

export default About;
