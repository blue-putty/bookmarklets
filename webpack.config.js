const path = require('path');
const BookmarkletPlugin = require('./webpack/BookmarkletPlugin');

module.exports = {
    mode: 'production',
    entry: {
        comment: './src/comment.js',
        focusMode: './src/focusMode.js',
        forwardAudio: './src/audio-utilities/forwardAudio.js',
        rewindAudio: './src/audio-utilities/rewindAudio.js',
        anki: './src/anki.ts',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: [/node_modules/],
                loader: 'ts-loader',
            },
        ],
    },
    resolve: { extensions: ['.ts'] },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true,
    },
    plugins: [new BookmarkletPlugin()],
};
