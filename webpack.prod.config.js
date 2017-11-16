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
    filename: 'io.kingno21.bundle.min.js'
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

  resolve: {
    modules: ['node_modules'],
    extensions: [".js", ".slim", '.jpg' ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    })

  ]
};
