const path = require("path")
module.exports = {
    entry: {
        app: "./app/js/main.js",
    },
    module: {
        loaders: [{
            test: /\.html$/,
            loader: "html-loader",
        }, {
            test: /\.vue$/,
            loader: "vue-loader",
        }, {
            test: /\.scss$/,
            loader: "style-loader!css-loader!sass-loader",
        }],
    },
    plugins: [],
    output: {
        filename: "[name].min.js", // 就是入口的app
        path: path.resolve(__dirname, "dist"),
    },
}
在房屋所在地和业主一起起诉
找到业主：拿着起诉书去物业前台，他们会通知业主
搜集证据：1、问中介问题要录音 2、不给退的时候找警察做笔录

1、现在的钱怎么退，押金等
2、贷款记录
3、征信问题怎么解决
征信不良最少3年内贷款都不会被批
