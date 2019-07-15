import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './Store';
import AppIntlProvider from './components/AppIntlProvider';

// 未使用 AppIntlProvider 时在此处加载 moment
// import moment from 'moment';
// import 'moment/locale/zh-cn';
// moment.locale('zh-cn');

ReactDOM.render(
  <Provider store={store}>
    <AppIntlProvider>
      <App />
    </AppIntlProvider>
  </Provider>,
  document.getElementById('root')
);