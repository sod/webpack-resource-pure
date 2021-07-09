module.exports = {
    mode: 'production',
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /foo\.jpg$/,
                type: 'asset/resource',
                generator: {
                    emit: false,
                    filename: 'foo-jpg-via-generator',
                },
            },
            {
                test: /bar\.jpg$/,
                loader: require.resolve('./image-string-loader'),
            },
        ]
    }
};