const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlplugin = new HtmlWebPackPlugin({
    template:path.join(__dirname,'./src/index.html'),
    filename:'index.html'
})

module.exports = {
    mode:"development",
    plugins:[
        htmlplugin
    ],
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:'babel-loader',
                exclude:/node_module/
            },
            {
                test:/\.css/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}