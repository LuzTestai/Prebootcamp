
var concatenar = function() {
  var arr = [];

  for(i=0; i < arguments.length; i++){
    arr.push(arguments[i])
  }

  return arr.join('')
}

function invocarFunciones(){
  var resultado="";

  for(i=0; i<arguments.length; i++) {
    resultado += (arguments[i]())
  }
  return resultado
}

var creadorDeIncrementos = function(num){
  return function(num2){
      return num+num2
  }
}

var invo = 0;

var invocacionUnica = function(fn){
  return function () {
    if (invo === 0) {
      invo++
  
      return fn()
    }
  };
}

objetoConClousure = function(){
  var valor = 0;
  var obj = {
    incremento: function(){
      valor = valor + 1
    },
    incrementoPor10: function(){
      valor = valor + 10
    },
    pedirValor: function(){
      return valor
    },
    cambiarValor: function(nuevoValor){
      valor = nuevoValor
      return nuevoValor
    },
  }

  return obj

}

ListaDeFuncionesInvitados = function(arrI, CDS){
  var nuevoArreglo = [];

  if (CDS === 404){
    for (let i = 0; i < arrI.length; i++){
      nuevoArreglo.push(function(cds){
        if (cds === 404) {
          return arrI[i]
        } else {
          return 'código secreto: invalido'
        }
      })
    }

    return nuevoArreglo;    
  }
}

var armarListaDeInvitados = function (arr, cds){
  var arreglo = [];
  if(cds === 404){
    for(let i = 0; i < arr.length; i++){
    arreglo.push(arr[i](cds))
    }
  }
  return arreglo
}
