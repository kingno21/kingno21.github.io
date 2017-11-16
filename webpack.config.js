var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    main: [
      './src/app.js',
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: "",
    filename: 'io.kingno21.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg|eot|woff|ttf|svg|woff2)$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      }
    ]
  },
  stats: {
    colors: true
  },

  devServer: {
    contentBase: './'
  },

  resolve: {
    modules: ['node_modules'],
    extensions: [".js", ".slim", '.jpg' ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery'
    })
  ],
  devtool: "source-map"
};
