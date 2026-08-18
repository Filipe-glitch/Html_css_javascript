let janelaAberta = window.open('', '', 'width=400,height=200');

function testarJanela() {
    if (janelaAberta.closed) {
        alert('A janela foi fechada');
    } 
    else {
        alert('A janela está aberta');
    }
}