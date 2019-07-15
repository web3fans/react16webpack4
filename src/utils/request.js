export const request = ({ url, method = 'GET', params }) => {
  let opt = {
    method,
  };
  if (params) {
    opt = {
      ...opt,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    };
  }

  return fetch(url, opt).then((response) => {
    if (!response.ok) {
      return Promise.reject(response.status);
    }
    return response.json();
  });
};


/**
 * method：方法别名；
 * params：参数列表数组；
 * secure：安全属性,默认为 true (AjaxSecureUnlockHandler.aspx);
 * success:成功回调；
 * error:失败回调；
 *
 * 调用方式：
 * //以提交数据为 FromData 为例
 * ajaxMethod({
 *  method: 'HELP_GetLongTime',
    params: [123],
    secure: true,
    success: function (data) {
        //...
    },
    error:function(err){
        //...
    }
 * })
 */

export const ajaxMethod = ({ method, params, secure = true }) => {
  const formData = new FormData();
  const dataParameter = { MethodAlias: method, Parameter: params };
  formData.append('data', JSON.stringify(dataParameter));
  const checkStatus = (response) => {
    if (response.ok) {
      return response.json();
    }
    const error1 = new Error(response.status);
    error1.response = response;
    throw error1;
  };
  return fetch(secure ? '/BuName/AjaxSecureUnlockHandler.aspx' : '/BuName/AjaxHandler.aspx', {// 这里根据实际项目完善路径
    method: 'POST',
    body: formData,
  }).then(checkStatus).then((result) => {
    if (result.State === 0) {
      return result;
    }
    // 可以做统一错误处理
    const error2 = new Error(result.ErrorMessage);
    error2.ResponseInfo = result;
    throw error2;
  }).catch(err => Promise.reject(err));
};
