const bg = document.querySelector(".bg");
const loadText = document.querySelector(".loading-text");

let load = 0;
const bluring = function () {
    load++;
    if(load > 99){
        clearInterval(init);
    }
    loadText.textContent = `${load}%`;
    loadText.style.opacity = scale(load, 0 , 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
};

 let init = setInterval(bluring, 30);

 function scale (number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}