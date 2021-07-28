//commenting buttons
let textButton = document.getElementsByClassName('ndfHFb-c4YZDc-cYSp0e-BIzmGd')[0];
let anywhereButton = document.getElementsByClassName('ndfHFb-c4YZDc-to915-LgbsSe ndfHFb-c4YZDc-C7uZwb-LgbsSe VIpgJd-TzA9Ye-eEGnhe ndfHFb-c4YZDc-LgbsSe ndfHFb-c4YZDc-C7uZwb-LgbsSe-SfQLQb-Bz112c')[0];

document.getElementsByClassName('ndfHFb-c4YZDc ndfHFb-c4YZDc-AHmuwe-Hr88gd-OWB6Me ndfHFb-c4YZDc-vyDMJf-aZ2wEe ndfHFb-c4YZDc-i5oIFb')[0].addEventListener('keyup', (e) => {
    if (e.key == 'm' && e.ctrlKey && e.altKey) {
        //fallback on using any where button if the text commenting button is disabled
        if (textButton.ariaDisabled) {
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