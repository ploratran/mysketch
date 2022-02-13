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
                test: /\.css$/
            }, 
            {
                test: /\.(jpe?g|png|gif|svg)$/, 
                use: [
                    'url-loader', 
                    'image-webpack-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(), // tells mini-css-extract-plugin to find files that are transformed from css-loader
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        })
    ]
}; 

module.exports = config; 