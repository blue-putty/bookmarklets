# Bookmarklets
Contains short scripts to make my browsing experience more efficient.

This quick project allowed me to practice Webpack; I wrote a webpack plugin to prefix the webpack output with `javascript:`, allowing direct copy paste into a bookmark.

# Building
1. Install dependencies: `npm install`

2. Build bookmarklets into `./dist` folder using webpack: `npm run build`

3. Add bookmarklets to browser ([tutorial article](https://mreidsma.github.io/bookmarklets/installing.html))

## About scripts

### [comment.js](./src/comment.js)
This script adds the commenting shortcut (shift + alt + m) to a Google Drive PDF viewer for quicker annotations.

### [focusMode.js](./src/focusMode.js)
From [this superuser post](https://superuser.com/questions/565976/how-to-hide-the-tab-bar-in-google-chrome); hides tab bars in Chrome for better focusing.

### [rewindAudio.js](./src/rewindAudio.js)
Rewinds audio elements

### [forwardAudio.js](./src/forwardAudio.js)
Fast-forwards audio elements