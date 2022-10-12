//  
// Script - script.js
// author - Jamal
// date - 11 octobar 2022

// DECLARING A VARIBLE
let count = 0;
// GETTING THE VALUE FROM THE ELEMENTS ID AND USING ONLCLICK EVENT
document.getElementById("decreaseBtn").onclick = function(){
// DECREASING A VALUE
    count-=1;
// SENDING THE DEACREASING VALUE TO THE ELEMENT
    document.getElementById("countLabel").innerHTML = count;
}

// GETTING THE VALUE FROM THE ELEMENTS ID AND USING ONLCLICK EVENT
document.getElementById("resetBtn").onclick = function(){
// KEEPING THE VALUE AS 0
    count=0;
// SENDING THE RESET VALUE TO THE ELEMENT
    document.getElementById("countLabel").innerHTML = count;
}

// GETTING THE VALUE FROM THE ELEMENTS ID AND USING ONLCLICK EVENT
document.getElementById("increaseBtn").onclick = function(){
// INCREASING A VALUE
    count+=1;
// SENDING THE INCREASING VALUE TO THE ELEMENT
    document.getElementById("countLabel").innerHTML = count;
}