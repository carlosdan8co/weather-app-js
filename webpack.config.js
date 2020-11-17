const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    entry: './src/app/index.js',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    devServer:{
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port:3000
    },
    module:{
        rules:[{
            test:/\.css$/,
            use:['style-loader','css-loader']
        }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
}