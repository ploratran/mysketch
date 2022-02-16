const path = require('path'); 
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack  = require('webpack');

const VENDOR_LIBS = [
    'react', 'react-dom', 'semantic-ui-css', 'semantic-ui-react'
];

const config = {
    entry: {
        bundle: './src/index.tsx',
        vendor: VENDOR_LIBS
    },
    mode: 'development', 
    output: {
        path: path.resolve(__dirname, 'build'), 
        filename: '[name].js', // all build to bundle.js file
        sourceMapFilename: "[name].js.map",
    }, 
    devtool: "eval-cheap-source-map",
    devServer: {
        static: path.join(__dirname, "build"),
        compress: true,
        port: 4000,
        historyApiFallback: true, 
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/, 
                exclude: /node_modules/, 
                resolve: {
                    extensions: ['.ts', '.tsx', '.js', 'jsx', '*'],
                }, 
                use: [
                    {
                        loader: 'ts-loader',
                        options: { 
                            compilerOptions: { noEmit: false } 
                        }
                    }
                ],
            }, 
            {
                use: [MiniCssExtractPlugin.loader, "style-loader","css-loader"],// order comes from right to left
                test: /\.css$/i
            }, 
            {
                test: /\.(png|woff|woff2|eot|}ttf|svg)$/,
                use: [{ loader: 'url-loader', options: { limit: 100000 } }],
            },
            {
                test: /[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/,
                use: [{ loader: "imports?this=>window" }],
            }, {
                test: /[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/,
                use: [{ loader: "imports?define=>false" }] 
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "./node_modules/semantic-ui-css/semantic.min.css" }), // tells mini-css-extract-plugin to find files that are transformed from css-loader
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }), 
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
    ]
}; 

module.exports = config; 