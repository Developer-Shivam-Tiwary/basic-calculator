let display = document.getElementById("display");

// Number buttons
document.getElementById("0").onclick = function(){ display.value += "0"; };
document.getElementById("1").onclick = function(){ display.value += "1"; };
document.getElementById("2").onclick = function(){ display.value += "2"; };
document.getElementById("3").onclick = function(){ display.value += "3"; };
document.getElementById("4").onclick = function(){ display.value += "4"; };
document.getElementById("5").onclick = function(){ display.value += "5"; };
document.getElementById("6").onclick = function(){ display.value += "6"; };
document.getElementById("7").onclick = function(){ display.value += "7"; };
document.getElementById("8").onclick = function(){ display.value += "8"; };
document.getElementById("9").onclick = function(){ display.value += "9"; };

// Clear display
document.getElementById("AC").onclick = function(){
    display.value = "";
};

// Backspace
document.getElementById("clr").onclick = function(){
    display.value = display.value.slice(0,-1);
};

// Operators
document.getElementById("+").onclick = function(){
    display.value += "+";
};

document.getElementById("-").onclick = function(){
    display.value += "-";
};

document.getElementById("*").onclick = function(){
    display.value += "*";
};

document.getElementById("/").onclick = function(){
    display.value += "/";
};

document.getElementById("%").onclick = function(){
    display.value += "%";
};

// Decimal
document.getElementById(".").onclick = function(){
    display.value += ".";
};

// Equal
document.querySelector(".equal").onclick = function(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
};