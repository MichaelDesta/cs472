
"use strict";

window.onload = function() {
    document.getElementById("start").onclick = ftimer;
    document.getElementById("stop").onclick = stop;
    document.getElementById("animation").onchange = animation;
    document.getElementById("fontsize").onchange = fsize;
    document.getElementById("turbo").onchange = turbo;
};

var animate = [];
var timer = null;
var i = 0;
var frame = null;

function start() {
    document.getElementById("text-area").value = animate[i];
    if (i < animate.length - 1) {
        i++;
    } else {
        i = 0;
    }
    document.getElementById("stop").disabled = false;
    document.getElementById("start").disabled = true;
    document.getElementById("animation").disabled = true;    
    document.getElementById("turbo").disabled = false;    


}

function ftimer() {
    if (timer == null) {
        timer = setInterval(start, 250);
    }
}

function stop() {
    document.getElementById("stop").disabled = true;
    document.getElementById("start").disabled = false;
    document.getElementById("animation").disabled = false;    
    clearInterval(timer);
    timer = null;
    document.getElementById("text-area").value = frame;
    i = 0;
}

function animation() {
    document.getElementById("start").disabled = false;
    var animation = document.getElementById("animation").value;
    animate = ANIMATIONS[animation].split("=====\n");

    frame = ANIMATIONS[animation];

    document.getElementById("text-area").value = ANIMATIONS[animation];


}

function fsize() {
    var text = document.getElementById("text-area");
    text.style.fontSize = document.getElementById("fontsize").value + "pt";
}

function turbo() {
    var check = document.getElementById("turbo").checked;
    clearInterval(timer);
    if (check){
        timer = setInterval(start, 50);
    }else{
        timer = setInterval(start, 250);      
    }
}