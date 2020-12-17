'use strict'
const WebpackCdnPlugin = require('webpack-cdn-plugin');
const Webpack = require('webpack');
const isProduction = process.env.NODE_ENV === 'production'
const path = require('path')

module.exports = {
    // 禁用eslint
    lintOnSave: false,
    // 打包时不生成.map文件
    productionSourceMap: false,
    // 打包资源存放路径
    assetsDir: './static/',
    // 项目部署的基础路径 默认/，放在子目录时使用./或者加你的域名
    publicPath: isProduction ? '.' : '/',
    css: { extract: false },
    // 扩展chain配置
    chainWebpack: config => {
        // 修复热更新HMR
        config.resolve.symlinks(true);
        // 移除 prefetch 插件
        config.plugins.delete('prefetch');
        // 移除 preload 插件
        config.plugins.delete('preload');
        // 移除moment依赖
        config.plugin('ignore').use(Webpack.IgnorePlugin, [/^\.\/locale$/, /moment$/])
        // 定义HTML模板
        if (!isProduction) {
            config.plugin('html').tap(args => {
                args[0].template = path.join(__dirname, 'examples/index.html')
                return args
            })
        }
        // if (!isProduction) {
        //     config.plugin('cdn').use(WebpackCdnPlugin, [{
        //         modules: [
        //             {
        //                 name: 'vue',
        //                 var: 'Vue',
        //                 path: 'https://cdn.bootcss.com/vue/2.6.11/vue.min.js',
        //             },
        //             {
        //                 name: 'ant-design-vue',
        //                 var: 'Antd',
        //                 path: 'http://cdn.jsdelivr.net/npm/ant-design-vue@1.6.4/dist/antd.min.js',
        //             }
        //         ],
        //         prodUrl: ':path'
        //     }])
        // }
        // 设置目录别名alias
        config.resolve.alias
            .set('components', path.join(__dirname, 'components'))
            .set('ant-components', path.join(__dirname, 'ant-components'))
            .set('mon-ui', path.join(__dirname, 'mon-ui'))
    },
    // 扩展webpack配置
    configureWebpack: config => {
        // 定义入口文件
        config.entry.app = path.join(__dirname, 'examples/main.js')
        // 不打包webpack
        config.externals = {
            vue: 'Vue',
            'ant-design-vue': 'ant-design-vue',
            'antd': 'ant-design-vue',
            moment: 'moment',
        }
    },
    // 开发服务环境配置
    devServer: {
        // 默认启动serve 打开index页面
        index: 'index.html',
        // 默认打开页面
        // open: true,
        // 允许其他机器访问
        host: '0.0.0.0',
        // 默认打开8080端口
        port: 8080,
        // 不支持使用https
        https: false,
        hotOnly: false,
    },
}