const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ['./src/index.js'],
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  output: {
    library: 'Loading',
    libraryTarget: 'umd',
    filename: './dist/bundle.js',
    path: path.resolve(__dirname, './'),
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      amd: 'react',
      commonjs: 'react',
    },
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, './node_modules')],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(scss|sass)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoader: 1,
              localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: true ? './dist/[name].css' : './dist/[name].[hash].css',
    }),
  ],
  devServer: {
    port: 8080,
  },
};
