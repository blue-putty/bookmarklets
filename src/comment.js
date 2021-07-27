//commenting buttons
let textButton = document.getElementsByClassName('ndfHFb-c4YZDc-cYSp0e-BIzmGd')[0];
let anywhereButton = document.getElementsByClassName('ndfHFb-c4YZDc-Wrql6b-C7uZwb-b0t70b')[0];

document.getElementsByClassName('ndfHFb-c4YZDc ndfHFb-c4YZDc-AHmuwe-Hr88gd-OWB6Me ndfHFb-c4YZDc-vyDMJf-aZ2wEe ndfHFb-c4YZDc-i5oIFb')[0].addEventListener('keyup', (e) => {
    if (e.key == 'm' && e.ctrlKey && e.altKey) {
        //fallback on using any where button if the text button does not exist
        if (typeof textButton === 'undefined') {
            click(anywhereButton);
        } else {
            click(textButton);
        }
    }
})

function click(ele) {
    ele.dispatchEvent(new MouseEvent('mousedown', {}));
    ele.dispatchEvent(new MouseEvent('mouseup', {}));
}