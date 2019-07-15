import React from 'react';
// import {Intl} from 'intl';//若要兼容ie需引入
import PropTypes from 'prop-types';
import { IntlProvider, addLocaleData } from 'react-intl';
import moment from 'moment';
import 'moment/locale/zh-cn';
import zh from 'react-intl/locale-data/zh';
import en from 'react-intl/locale-data/en';
import { LocaleProvider } from 'antd';
import enUSui from 'antd/lib/locale-provider/en_US';
import zhCN from '../locale/zh_CN';
import enUS from '../locale/en_US';

let locale;
let localUI;
let messages;

addLocaleData([...en, ...zh]);

function getLang() {
  let lang = '';
  const { search } = window.location;
  const match = search.match(/[?|&]lang=([^&]+)/);
  // url优先
  if (match && match.length === 2) {
    lang = match[1];
  } else {
    // safari is 'zh-cn', while other browser is 'zh-CN';
    lang = navigator.language && navigator.language.toLowerCase().split(/[_-]/)[0];
  }
  lang = lang && lang.toLowerCase();
  switch (lang) {
    case 'en':
      locale = 'en-US';
      messages = enUS;
      localUI = enUSui;
      moment.locale('en');
      break;
    case 'zh':
    case 'cn':
    default:
      locale = 'zh-CN';
      messages = zhCN;
      localUI = null;
      moment.locale('zh-cn');
      break;
  }
}

getLang();

function AppIntlProvider(props) {
  return (
    <LocaleProvider locale={localUI}>
      <IntlProvider locale={locale} messages={messages}>
        { props.children }
      </IntlProvider>
    </LocaleProvider>
  );
}

AppIntlProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppIntlProvider;
