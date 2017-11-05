module.exports = {
  plugins: [
    require('postcss-import')({
      path: ['styles']
    }),
    require('postcss-cssnext')({ apply: false })
  ]
};
