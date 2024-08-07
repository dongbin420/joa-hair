const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');
const dotenv = require('dotenv');

dotenv.config();

// 폰트 + 해당하는 이미지만 프리로드
const imagesToPreload = [
  'bannerImg4',
  'bannerImg3',
  'bannerImg2',
  'bannerImg1',
  'facebook',
  'instagram',
  'mainImg',
];
const imagePatterns = imagesToPreload.map(
  (image) => new RegExp(`${image}\\.[a-f0-9]{20}\\.(webp|png)$`),
);

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'image/[name].[hash][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(tsx?|jsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      hash: true,
    }),
    new FaviconsWebpackPlugin({
      logo: './public/favicon.png',
      favicons: {
        icons: {
          favicons: true,
          android: false,
          appleIcon: false,
          appleStartup: false,
          windows: false,
          yandex: false,
        },
      },
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: './public/og', to: './og' }],
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
    // 폰트만 프리로드
    // new PreloadWebpackPlugin({
    //   rel: 'preload',
    //   fileWhitelist: [/\.woff2$/],
    //   include: 'allAssets',
    //   as: 'font',
    // }),

    // 메인이미지만
    // new PreloadWebpackPlugin({
    //   rel: 'preload',
    //   fileWhitelist: [/\.woff2$/, new RegExp(`mainImg\\.[a-f0-9]{20}\\.webp$`)],
    //   include: 'allAssets',
    //   as(entry) {
    //     if (/\.woff2$/.test(entry)) {
    //       return 'font';
    //     }
    //     if (new RegExp(`mainImg\\.[a-f0-9]{20}\\.webp$`).test(entry)) {
    //       return 'image';
    //     }
    //   },
    // }),

    // 폰트 + 해당하는 이미지만 프리로드
    new PreloadWebpackPlugin({
      rel: 'preload',
      fileWhitelist: [/\.woff2$/, ...imagePatterns],
      include: 'allAssets',
      as(entry) {
        if (/\.woff2$/.test(entry)) {
          return 'font';
        }
        if (imagePatterns.some((pattern) => pattern.test(entry))) {
          return 'image';
        }
      },
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.jsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
