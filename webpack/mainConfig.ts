import * as ExtractCssPlugin from 'extract-text-webpack-plugin';
const extractCssPlugin = new ExtractCssPlugin('[name].css');

export function getMainConfig(rootDir) {
  return {
    externals: {},

    module: {
      rules: [{
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'tslint-loader',
      }, {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }, {
        test: /\.ts/,
        use: 'source-map-loader',
        enforce: 'pre',
      }, {
        test: /\.(sass|scss)$/,
        use: extractCssPlugin.extract(['css-loader', 'sass-loader']),
        exclude: /node_modules/,
      }],
    },

    resolve: {
      modules: ['node_modules'],
      descriptionFiles: ['package.json'],
      extensions: ['.js', '.ts', '.tsx'],
      alias: {},
    },

    plugins: [
      extractCssPlugin,
    ],

    devServer: {
      disableHostCheck: true,
      contentBase: rootDir,
      hot: false,
      inline: false,
    },

    node: {
      fs: 'empty',
    },

    devtool: 'inline-source-map',
  }
}
