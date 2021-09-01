const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolveModuleName } = require('typescript')

module.exports = [
    {
        mode: 'development',
        entry: './src/main.ts',
        target: 'electron-main',
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    include: /src/,
                    use: [{ loader: 'ts-loader' }]
                },
                {
                    test: /\.css$/i,
                    include: __dirname + './src/style.css',
                    use: ["css-loader"],
                }
            ]
        },
        output: {
            path: __dirname + '/dist',
            filename: 'main.js'
        },
        resolve: {
            extensions: ['', '.js', '.ts', '.tsx', '.json', '.wasm', '.css']
        }
    },
    {
        mode: 'development',
        entry: './src/react.tsx',
        target: 'electron-renderer',
        devtool: 'source-map',
        module: { 
            rules: [
                {
                    test: /\.ts(x?)$/,
                    include: /src/,
                    use: [{ loader: 'ts-loader' }]
                },
                {
                    test: /\.css$/i,
                    use: [{ loader: 'css-loader' }]
                }
            ] 
        },
        output: {
            path: __dirname + '/dist',
            filename: 'react.js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            })
        ],
        resolve: {
            extensions: ['', '.js', '.ts', '.tsx', '.json', '.wasm', '.css']
        }
    }
]