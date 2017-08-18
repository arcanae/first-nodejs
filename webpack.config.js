module.exports = {
    entry: './webpack/ajax.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map'
}