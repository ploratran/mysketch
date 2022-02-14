const path = require('path'); 
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { webpack } = require('webpack');

const VENDOR_LIBS = [
    'react', 'react-dom', 'semantic-ui-css', 'semantic-ui-react'
];

const config = {
    // entry: './src/index.tsx',
    entry: {
        bundle: './src/index.tsx',
        vendor: VENDOR_LIBS
    },
    mode: 'development', 
    output: {
        path: path.resolve(__dirname, 'build'), 
        filename: '[name].js', // all build to bundle.js file
    }, 
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
            // {
            //     test: /\.(jpe?g|png|gif|woff|woff2|otf|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
            //     use: [
            //         {
            //             loader: 'url-loader',
            //             options: {
            //                 limit: 1000,
            //                 name : 'assets/img/[name].[ext]'
            //             }
            //         }
            //     ]
            // }, 
            {
                test: /\.(png|woff|woff2|eot|}ttf|svg)$/,
                use: [{ loader: 'url-loader', options: { limit: 100000 } }],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "./node_modules/semantic-ui-css/semantic.min.css" }), // tells mini-css-extract-plugin to find files that are transformed from css-loader
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        })
    ]
}; 

module.exports = config; 