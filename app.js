const div = document.getElementById('block');


        const sizeSetting = document.getElementById('setting');

        const red = document.getElementById('red');
        const green = document.getElementById('green');
        const blue = document.getElementById('blue');

        const pixels = document.getElementById('pixels');
        const pixelsRed = document.getElementById('pixels-red');
        const pixelsGreen = document.getElementById('pixels-green');
        const pixelsBlue = document.getElementById('pixels-blue');




        sizeSetting.onchange = function () {
            pixels.textContent = sizeSetting.value;
            div.style.width = sizeSetting.value + 'px';
            div.style.height = sizeSetting.value + 'px';
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