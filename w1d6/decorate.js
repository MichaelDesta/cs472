window.onload= function() {
    "use strict";

    document.getElementById("decoration_button").onclick = function() {
        setInterval(growLarger, 500);
    }
    document.getElementById("decoration_checkbox").onchange = function() {
        let isChecked = document.getElementById("decoration_checkbox").checked;
        if (isChecked) {
            changeFCDI("bold", "green", "underline", "url(image/dolar.jpg)");
        } else {
            changeFCDI("normal", "black", "none", "none");
        }
    }

    onClickChangeText("pig_latin_button", pigLatin);
    onClickChangeText("malkovich_button", malkovizer);

    //increases font size of #input_text by 2pt
    function growLarger() {
        document.getElementById("input_text").style.fontSize = 
            (parseInt(window.getComputedStyle(document.getElementById("input_text")).fontSize) + 8 / 3) + "px";
    }
    // sets font, color, textDecoration, and backgroundImage for the style of #input_text
    function changeFCDI(font, color, textDecoration, backgroundImage) {
            document.getElementById("input_text").style.font = font;
            document.getElementById("input_text").style.color = color;
            document.getElementById("input_text").style.textDecoration = textDecoration;
            document.body.style.backgroundImage = backgroundImage;
    }
    // converts text to pig latin + does not handle character case
    function pigLatin(string) {
        let firstLetter = string.charAt(0).toLowerCase();
        if (firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u") {
            return string + "ay";
        } 
        return string.charAt(1) + string.substr(2) + firstLetter + "ay";
    }
    // replaces words longer than four letters to "Malkovich"
    function malkovizer(string) {
        if (string.length >= 5) {
            return "Malkovich";
        }
        return string;
    }
    // sets button behavior based on a function that changes text values
    function onClickChangeText(buttonID, parserFunction) {
        document.getElementById(buttonID).onclick = function() {
            let userText = document.getElementById("input_text").value;
            let changedText = userText.split(" ").map(word => parserFunction(word)).join(" ");
            document.getElementById("input_text").value = changedText;
        } 
    }
}