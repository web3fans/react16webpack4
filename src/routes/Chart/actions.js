import { message } from '@wind/wind-ui';
import { GET_DATA, CLEAR_DATA } from './actionTypes';

export const getData = () => ({
  type: GET_DATA,
  payload: fetch('/charts', {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    if (!response.ok) {
      message.error('加载失败');
      // throw new Error('Fail to get response with status ' + response.status);
    }
    return response.json().then(responseJson => responseJson);
  }),
});

export const clearData = () => ({
  type: CLEAR_DATA,
  payload: null,
});
