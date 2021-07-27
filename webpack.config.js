const path = require('path');
const BookmarkletPlugin = require('./webpack/BookmarkletPlugin');

module.exports = {
    mode: 'production',
    entry: {
        comment: './src/comment.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    plugins: [new BookmarkletPlugin()]
};