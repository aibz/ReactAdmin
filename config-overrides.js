const { override, fixBabelImports, addLessLoader } = require('customize-cra')
//针对adtd实现按需打包 ，根据import来打包 : 根据babel-plugin-import
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true, //自动打包相关的样式
    }),

    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A' },
    }),

)