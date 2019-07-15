const dimensionMap = {
  // xs: 768,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1600,
};

function getWindowWidth() {
  // ie9+，Web窗口宽度，而document.body.clientWidth不包括滚动条
  return window.innerWidth;
}

function gteBreakpoint(type) {
  return getWindowWidth() >= dimensionMap[type];
}

function gteSm() {
  return gteBreakpoint('sm');
}

/**
 * 根据当前所处断点返回相应值
 * 如getResValue({sm:{span:12},xs:{span:24}}),则当屏幕大于sm断点时，返回{span:12},否则返回{span:24}
 * @param {*} opt
 * @returns {*}
 */
function getRsValue(opt) {
  const bqs = ['xl', 'lg', 'md', 'sm'];
  let ret = opt.xs;
  let ww = getWindowWidth();
  bqs.some((val) => {
    if (opt[val] && ww >= dimensionMap[val]) {
      ret = opt[val];
      return true;
    }
    return false;
  });
  return ret;
}

export default {
  getWindowWidth, gteBreakpoint, gteSm, getRsValue,
};
