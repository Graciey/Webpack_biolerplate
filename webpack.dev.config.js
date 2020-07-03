const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );
const { CleanWebpackPlugin } = require('clean-webpack-plugin');



module.exports = {
   context: __dirname,
   entry: './src/index.js',
   output: {
      path: path.resolve( __dirname, 'dist' ),
      filename: '[name].bundle.js',
      publicPath: '',
   },
   mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        index: 'index.html',
        port: 9000,
        hot: true,
        inline: true,
        compress: true,
        historyApiFallback: true
      },
   module: {
      rules: [
         {
            test: /\.js$/,
            use: 'babel-loader'
         },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
         },
         {
            test: /\.scss$/,
            use: ['style-loader','css-loader', 'sass-loader']
        },
        {
            test: /\.(png|jpg)$/,
            use: ['file-loader']
        }
]
   },
   plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
      new HtmlWebPackPlugin({
         template: path.resolve( __dirname, 'public/index.html' ),
         filename: 'index.html'
      })
   ]
};

