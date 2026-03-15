let janelaAberta = window.open('','','width=400,height=200'); //criamos janela com a propriedade 
  function testarJanela() {
    if (janelaAberta.closed) { // se a janela estiver fechada
       alert('A janela foi fechada');
    } 
    else {
       alert('A janela está aberta');
    };
}


