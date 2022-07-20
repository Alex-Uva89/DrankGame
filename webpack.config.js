const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
   plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html",
        inject: "body"
   })],
   output : {
        filename: "bundle.js",
        clean: true
    },
   devServer: {
     open: true,
   },
   module: {
        rules: [{
            test: /\.(scss|css)$/,
            use: [ 'style-loader', 'css-loader', 'sass-loader' ]
        },
        {   
            test: /\.(png|svg|jpg|gif|jpeg)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.html$/,
            loader: 'html-loader',
        }
    ],
    }
};
