const path = require(`path`);

module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    open: false,
    port: 1337,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      }
    ],
  },
  devtool: `source-map`,
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, ``, `src/components`),
      '@utils': path.resolve(__dirname, ``, `src/utils`),
      '@hocs': path.resolve(__dirname, ``, `src/hocs`),
      '@mocks': path.resolve(__dirname, ``, `src/mocks`),
      '@reducers': path.resolve(__dirname, ``, `src/reducers`),
    },
    extensions: [`.js`, `.jsx`]
  }
};
