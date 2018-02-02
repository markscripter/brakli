const path = require('path')

module.exports = [
  {
    entry: './src/client/index.js',
    output: {
      path: path.join(__dirname, 'src/public/js'),
      filename: 'app.js'
    },
    module: {
      rules: [
        {
          test: /\.(jsx)?/,
          exclude: /node_modules/,        
          use: [
            {
              loader: 'babel-loader'
            }
          ]
        }
      ]
    }
  },
  {
    entry: './src/client/app.jsx',
    output: {
      path: path.join(__dirname, 'src/server/bundles'),
      filename: 'app.js'
    },
    module: {
      rules: [
        {
          test: /\.(jsx)?/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader'
            }
          ]
        }
      ]
    }
  }
]
