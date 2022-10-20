const webpack = require('webpack');
module.exports = function override(config, env) {
    config.resolve.fallback = {
        "fs": false,
        "tls": false,
        "net": false,
        "http": require.resolve("stream-http"),
        "https": false,
        "zlib": false ,
        "path": false,
        "stream": false,
        "util": false,
        "crypto": false
    };
    config.plugins.push(
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        }),
    );

    return config;
}