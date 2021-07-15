import * as webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import webpackDevServer from 'webpack-dev-server';

interface WebpackConfig extends webpack.Configuration {
  devServer: webpackDevServer.Configuration;
}

const isProduction = process.env.NODE_ENV == 'production';

const config: WebpackConfig = {
  entry: path.resolve('src', 'index.tsx'),
  output: {
    filename: '[contenthash].bundle.js',
    path: path.resolve('dist'),
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        loader: 'ts-loader',
        exclude: '/node_modules/',
        options: {
          transpileOnly: true,
        },
      },
      {
        test: /\.(svg|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('public', 'index.html'),
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
  devServer: {
    open: true,
    hot: true,
    host: 'localhost',
    historyApiFallback: true,
  },
};

config.mode = isProduction ? 'production' : 'development';

export default config;
