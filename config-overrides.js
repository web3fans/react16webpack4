const {
  override,
  fixBabelImports,
  addLessLoader,
  addDecoratorsLegacy,
  addWebpackAlias
} = require('customize-cra');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const addCustomize = () => config => {
  if (process.env.NODE_ENV === 'production') {
    config.devtool = false; //去掉map文件
    if (config.plugins) {
      config.plugins.push(new BundleAnalyzerPlugin());
    }
    const splitChunksConfig = config.optimization.splitChunks;
    Object.assign(splitChunksConfig, {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /node_modules/,
          name: 'vendors',
          priority: -10,
        },
        common: {
          name: 'common',
          minChunks: 2,
          minSize: 30000,
          chunks: 'all'
        }
      }
    })
  }
  return config;
}


module.exports = override(
  fixBabelImports('import', {
    libraryName: '@antd',
    libraryDirectory: 'es',
    style: true
  }),
  fixBabelImports('lodash', {
    libraryDirectory: '',
    camel2DashComponentName: false
  }),
  addLessLoader({
    modifyvars: {
      "@icon-url": `${path.resolve(__dirname,'build/assets/font/iconfont')}`, //使用本地字体文件
      '@font-size-base': '13px',
      '@primary-color': '#FF2DBD'
    },
    javascriptEnabled: true
  }),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  }),
  addDecoratorsLegacy(),
  addCustomize()
);