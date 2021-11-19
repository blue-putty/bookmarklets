function getSelectionText(): string {
    const text = window.getSelection().toString();

    return text;
}

getSelectionText();
