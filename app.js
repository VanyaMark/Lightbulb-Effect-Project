// Buena suerte ! Espero que se te encianda la "bombilla"!

const bulb = document.querySelector('#bulb')
const toggleBulb = () => bulb.className === 'bulb-off' ? bulb.className = 'bulb-on': bulb.className = 'bulb-off';

bulb.onclick = toggleBulb;