const path = require('path')
//导入
const HtmlPlugin = require('html-webpack-plugin')
//new构造函数，创建实例化对象
const htmlPlugin = new HtmlPlugin({
    //指定复制页面
    template: './src/index.html',
    //指定复制出来的文件名和存放路径
    filename: './index.html',
})
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    //开发用development 发布用production因为上线追求的是体积
    mode: 'development',
    //指定要处理哪个文件
    entry: path.join(__dirname, './src/index.js'),
    output: {
        // 存放到目录
        path: path.join(__dirname, 'dist'),
        // 生成文件名
        filename: 'js/main.js'
    },
    //插件的数组，将来webpack在运行时，会加载并调用这些插件
    plugins: [htmlPlugin, new CleanWebpackPlugin()],
    devServer: {
        //自动打开
        open: true,
        // 如果端口号是80可以被省略 设置端口号
        port: 80,
        //指定实时打包所使用的主机地址,指定运行的主机地址
        host: 'localhost'
    },
    module: {

        rules: [
            //检测文件后缀名为css结尾的文件
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }
        ]

    }

}