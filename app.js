const div = document.getElementById('block');

const radioPixel = document.getElementById('radio-pixel');
const radioPercent = document.getElementById('radio-percent');

const settingWidth = document.getElementById('setting-width');
const settingHeight = document.getElementById('setting-height');
const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');

const pixelsWidth = document.getElementById('pixels-width');
const pixelsHeight = document.getElementById('pixels-height');
const pixelsRed = document.getElementById('pixels-red');
const pixelsGreen = document.getElementById('pixels-green');
const pixelsBlue = document.getElementById('pixels-blue');



radioPixel.onchange = function () {
    settingWidth.onchange = function () {
        pixelsWidth.textContent = settingWidth.value;
        div.style.width = settingWidth.value + 'px';
    }

    settingHeight.onchange = function () {
        pixelsHeight.textContent = settingHeight.value;
        div.style.height = settingHeight.value + 'px';
    }
}

radioPercent.onchange = function () { 
    settingWidth.onchange = function () {
        pixelsWidth.textContent = settingWidth.value;
        div.style.width = settingWidth.value + '%';
     }

     settingHeight.onchange = function () {
        pixelsHeight.textContent = settingHeight.value;
        div.style.height = settingHeight.value + '%';
         }
}


red.onchange = function () {
    pixelsRed.textContent = red.value;
    div.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;

}
green.onchange = function () {
    pixelsGreen.textContent = green.value;
    div.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;
}
blue.onchange = function () {
    pixelsBlue.textContent = blue.value;
    div.style.backgroundColor = `rgb(${red.value},${green.value},${blue.value})`;

}