var path = require("path");

var config={
    entry:{
        main:"./src/main" //执行命令的路径开始
    },
    output:{
        path:path.join(__dirname,"./dist"),
        filename:"main.js",
        publicPath: 'dist/' //webpack-dev-server在内存中进行打包时生成的静态文件所在的位置,会影响main.js&图片资源
    },
    /*
        和命令行的启动方式进行merge,命令行的参数优先级大
        contentBase:"src"代表的是"/"指向的路径
     */
    devServer: {
        open:true,
        port:3000,
        contentBase:"src"
    },
    module:{
        rules:[
            {test: /\.css$/, use: ["style-loader","css-loader"]},
            /*
                limit给定的值是图片的大小单位是byte,如果我们引用的图片大于给定的limit值,则不会被转为
                base64格式的字符串。
             */
            {test:/\.(jpg|png|gif|bmp|jpeg)$/, use: ["url-loader?limit=7000&name=[hash:8]-[name].[ext]"]},
            {test:/\.(ttf|eot|svg|woff|woff2)$/, use: ["url-loader"]}, //处理字体文件的配置项
            {test:/\.vue$/,use:"vue-loader"}
        ]
    },
    resolve:{
        alias:{ //修改vue被导入时候的包路径
            /*"vue$":"vue/dist/vue.js"*/
        }
    }
}

module.exports=config;//nodejs中的语法

