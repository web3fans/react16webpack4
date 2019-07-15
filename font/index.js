let fs = require('fs');
let path = require('path');
let fontCarrier = require('font-carrier');

function getSVG(filename) {
  return fs.readFileSync(path.resolve(__dirname, filename)).toString();
}

function setSvg(unicode, name, filename, font) {
  font.setGlyph(unicode, { svg: getSVG(filename), glyphName: name });
}

// 创建空白字体，使用svg生成字体
let font = fontCarrier.create();

// 修改fontface配置，与 iconfont 站点一致
font.setFontface({
  ascent: 896,
  descent: -128,
  fontWeight: '500',
});

// svg 必须合并、轮廓化，且不能使用旋转和镜像
// 如果图形错位，一般是svg不符合规则，请联系设计师查看相关设计标准
// unicode 可从e000开始
setSvg('&#xe000;', 'add', './svgs/add.svg', font);
setSvg('&#xe001;', 'asset', './svgs/asset.svg', font);
setSvg('&#xe002;', 'good', './svgs/good.svg', font);

// 会在目录生成 iconfont.ttf 等 4 个字体文件，需配合 css 使用
font.output({
  // path: '../../../public/assets/font/iconfont',
  path: path.resolve(__dirname, '../src/assets/font/iconfont'),
});
