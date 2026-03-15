let timeout;
function myFunction() {
 timeout = setTimeout(alertFunc, 2000);
}
function alertFunc() {
 alert("Olá Mundo!");
}

myInterval = setInterval(setCor, 500);
function setCor() {
 let x = document.body; 
 x.style.backgroundColor = x.style.backgroundColor == "gray" ? "white" : "gray";
}
function paraCor() {
 clearInterval(myInterval); //clearInterval() finaliza setInterval()
}

