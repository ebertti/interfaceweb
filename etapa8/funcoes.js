function minhaFuncao1() {
  return 'ola 1';
}

var minhaFuncao2 = function () {
  return 'ola 2'
};

function digaOla(nome){
  return 'Olá ' + nome;
}

function soma(x, y) {
  return x + y;
}

function retornaNada(){
  console.log('passei aqui');
}

function divisao(x, y){
  if(y == 0){
    throw "Divisão por 0 é irregular"
  }
  return x/y;
}

var total;
function clique(){
  var valor = 10;
  var divisor = 5;

  function interna(){
    return valor/divisor;
  }

  total = interna();
}

function qualIdade(){
  idade = 10;
}

function executarDivisao(){
  try {
    var total = divisao(10,0);
  } catch (excecao){
    alert("ocorreu um erro");
  }
  console.log(total);
}

function multiplicar(x, y, callback) {
  var total = x * y;
  callback(total);
}

function espere() {
  setTimeout(function () {
    console.log('depois de 4 segundos');
  }, 4000)
}

function percorrerSomarMultiplicarUltimo(array) {
  var total = 0;
  array.forEach(function (item, index, colecao) {

    if(index == colecao.length - 1){
      total *= item;
    } else {
      total += item;
    }

  });
  return total
}

function testeEscopo() {
  var valor = 10;

  function mudando1() {
    total = 2;
  }

  function mudando2() {
    var total = 5;
  }

  mudando2();
}

function registrarJquery() {
  $('h1').click(function(evt){

    $('.minhaClasse').fadeIn(1000, function () {
      $('.classe2').animate({'margin-left':100})
    })

  });
}
