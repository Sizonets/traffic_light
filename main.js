/*const lamps =document.querySelectorAll(".lamp");
console.log(lamps);
let activeLight = 0;

setInterval(() => {
    changeLight();
}, 1500);

function changeLight() {
    lamps[activeLight].className = "lamp";
    activeLight++;

    if(activeLight > 2){
        activeLight = 0;
    }
    const currentLight = lamps[activeLight];
    currentLight.classList.add(currentLight.getAttribute("color"))
}*/


const $lamps = [...document.querySelectorAll('.lamp')];
const numberLamp = [0, 1, 2, 1];


    numberLamp.forEach ( number => {
        let currentLight = $lamps[number];
        let secounds = +$lamps[number].dataset['mksecounds'];
        let color = $lamps[number].dataset['color'];
        currentLight.classList.add(`${color}`);
        setTimeout(paintRemove(currentLight), secounds);
    });

function paintRemove(domElement) {
    domElement.className = 'lamp';
}
