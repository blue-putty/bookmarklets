function init(): void {
    document.addEventListener('keydown', keyHandler);
}

function keyHandler(event: KeyboardEvent) {
    if (event.ctrlKey && event.shiftKey && event.code == 'KeyC') {
        cloze(event);
        event.preventDefault();
    }
}

function cloze(event: KeyboardEvent) {
    const selection = window.getSelection();
    const ele = (event.target as Element).childNodes[0];

    console.log(event);
    console.log(selection);

    const text = ele.textContent;

    ele.textContent = `${text.substring(0, selection.anchorOffset)}{{c1::`;
}

init();
