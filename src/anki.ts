function getSelectionText() {
    var text = '';
    text = window.getSelection().toString();

    return text;
}

getSelectionText();
