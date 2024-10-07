var Candidatos = {
  ESQUERDO: 1,
  DIREITO: 2,
};

var arrayDireita = new Array();
var arrayEsquerda = new Array();
var count = 0;


class Elemento {
  constructor(lado, numero) {
    this.lado = lado;
    this.numero = numero;
  }
}
function addEsquerdo() {
  if (arrayEsquerda.length < 10) {
    let elemento = new Elemento(Candidatos.ESQUERDO, ++count);
    arrayEsquerda.push(elemento);
    let htmlMostrado = criaHtml(arrayEsquerda);
    document.getElementById("box-esquerda").innerHTML = htmlMostrado;
    document.getElementById("msg").innerText = '';
  } else {
    document.getElementById("msg").innerText = 'SLOT ESQUERDO CHEGOU AO LIMITE'
  }
}

function addDireito() {
  if (arrayDireita.length < 10) {
    let elemento = new Elemento(Candidatos.DIREITO, ++count);
    arrayDireita.push(elemento);
    let htmlMostrado = criaHtml(arrayDireita);
    document.getElementById("box-direita").innerHTML = htmlMostrado;
    document.getElementById("msg").innerText = '';
  } else {
    document.getElementById("msg").innerText = 'SLOT DIREITO CHEGOU AO LIMITE'
  }
}



function criaHtml(array) {
  let html = '';
  for (let elemento of array) {
    if (elemento.lado == Candidatos.DIREITO) {
      html += '<div class="el-direito">';
      html += elemento.numero + '. DIREITO';
      html += '</div>';
    } else {
      html += '<div class="el-esquerdo">';
      html += elemento.numero + '. ESQUERDA';
      html += '</div>';
    }
  }
  return html;
}
