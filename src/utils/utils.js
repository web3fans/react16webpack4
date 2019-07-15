const now = Date.now || function () {
  return new Date().getTime();
};

export function debounce(func, wait, immediate) {
  let timeout;
  function debounceFunc(...args) {
    const context = this;
    // https://fb.me/react-event-pooling
    if (args[0] && args[0].persist) {
      args[0].persist();
    }
    const later = () => {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  }
  debounceFunc.cancel = function cancel() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  return debounceFunc;
}

// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.
export function throttle(func, wait, options) {
  let timeout,
    context,
    args,
    result;
  let previous = 0;
  if (!options) options = {};

  let later = function () {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  let throttled = function () {
    let now = Date.now();
    if (!previous && options.leading === false) previous = now;
    let remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };

  throttled.cancel = function () {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  return throttled;
}

export function convertThousands(num) {
        var prefix, suffix, sign;
        if (isNaN(Number(num))) {
            return num;
        }
 
        sign = (num >= 0) ? '' : '-';
        num = (Math.abs(num) || 0).toString();
        if (num.indexOf('.') >= 0) {
            prefix = num.split('.')[0];
            suffix = num.split('.')[1];
        }
        else {
            prefix = num;
        }
 
        var result = '';
        while (prefix.length > 3) {
            result = ',' + prefix.slice(-3) + result;
            prefix = prefix.slice(0, prefix.length - 3);
        }
        if (prefix) {
            result = sign + prefix + result;
        }
 
        if (suffix) {
            result = result + '.' + suffix;
        }
        return result;
    };

    /* 获取URL查询参数 */
   export function getQueryString(param) {
        var sQuery = window.location.search;
        if (sQuery && sQuery.length > 0) {
            var arr = sQuery.substr(1).split('&');
            for (var i in arr) {
                var pair = arr[i].split('=');
                if (param && param.toLowerCase() === pair[0].toLowerCase() && pair[1]) {
                    return pair[1];
                }
            }
        }
        return '';
    };
    export function type(obj) {
    if (obj == null) return String(obj)
    return typeof obj === 'object' ? class2type[ Object.prototype.toString.call(obj) ] || 'object' : typeof obj
}