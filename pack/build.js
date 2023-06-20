process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const webpackConfig = require('./config');

webpackConfig.mode = 'production';

webpack(webpackConfig, (err, stats) => {
    if (err) {
        console.log(err.stack || err);
    } else if (stats.hasErrors()) {
        console.log(stats.toString({
            chunks: false,
            colors: true
        }));
    } else {
        console.log(stats.toString({
            chunk: false,
            colors: true
        }));
    }
});