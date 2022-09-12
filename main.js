function tocaSom (seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento && elemento.localName === 'audio') {  
         elemento.play();
  } else {
      alert('Elemento não encontrado');
  }
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

//let contador = 0;

/*//enquanto
while(contador < ListaDeTeclas.length) {

  const tecla = ListaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  //template string
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  contador = contador + 1;
}
*/

//para
for (let contador = 0; contador < ListaDeTeclas.length; contador++) {

  const tecla = ListaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`; //template string

  tecla.onclick = function () {
    tocaSom(idAudio); 
   
  }

  tecla.onkeydown = function (evento) {

    if (evento.code === 'Space' || evento.code === 'Enter') {
        tecla.classList.add('ativa');
    }

  }

  tecla.onkeyup = function() {
    tecla.classList.remove('ativa');
  }

}

