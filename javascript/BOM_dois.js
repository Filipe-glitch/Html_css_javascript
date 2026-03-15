function abreJanela() {
   novaJanela = window.open('https://google.com','_blank','width=400,height=400');
}
function fechaJanela(){ 
   novaJanela.close();
}

window.onload = function() { 
  document.forms[0].elements[0].value = 'Anna';
  document.forms[0].elements[1].value = 'Silva';
}