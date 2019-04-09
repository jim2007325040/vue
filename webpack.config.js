module.exports = [
     module={
         rules: [
                 {
                        test: /\.(scss|css)$/,
                        use:[{
                                 loader:'css-loader',
                                 options: { minimize: false }
                          },
                          {
                              loader:'sass-loader'
                           },
                         'postcss-loader'
                        ]
                  }
                 ]
      }
]
