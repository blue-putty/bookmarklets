const path = require('path');
const BookmarkletPlugin = require('./webpack/BookmarkletPlugin');

module.exports = {
    mode: 'production',
    entry: {
        comment: './src/comment.js',
        focusMode: './src/focusMode.js',
        forwardAudio: './src/forwardAudio.js',
        rewindAudio: './src/rewindAudio.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    plugins: [new BookmarkletPlugin()]
};