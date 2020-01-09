function CalculadoraNPI() {
  this.cuenta = 0;
  this.numerosEnFila = [];

  this.agregar = function(num) {
    this.numerosEnFila.push(num)
  };
 
  this.multiplicar = function(){
    if(this.numerosEnFila.length < 1) {
      throw 'La calculadoraNPI necesita por lo menos 2 números';
    }

    if (this.numerosEnFila.length === 1) {
      var ultimoNum = this.numerosEnFila.pop();
      this.cuenta *= ultimoNum
    } else { 
      var ultimoNum2 = this.numerosEnFila.pop();
      var ultimoNum = this.numerosEnFila.pop();
      var resultado = ultimoNum2 * ultimoNum;
      this.cuenta *= resultado
    }
    
  }
}

CalculadoraNPI.prototype.sumar = function() {
  if(this.numerosEnFila.length < 1){
     throw 'La calculadoraNPI necesita por lo menos 2 números';
    }
  if (this.numerosEnFila.length === 1) {
    var ultimoNum = this.numerosEnFila.pop();
    this.cuenta += ultimoNum 
  } else { 
    var ultimoNum = this.numerosEnFila.pop();
    var ultimoNum2 = this.numerosEnFila.pop();

    var resultado = ultimoNum + ultimoNum2;
    this.cuenta += resultado
  }
};
CalculadoraNPI.prototype.restar = function(){
  if(this.numerosEnFila.length < 1){
    throw 'La calculadoraNPI necesita por lo menos 2 números';
   }
  if (this.numerosEnFila.length === 1) {
    var ultimoNum = this.numerosEnFila.pop();
    this.cuenta -= ultimoNum
  } else { 
    var ultimoNum2 = this.numerosEnFila.pop();
    var ultimoNum = this.numerosEnFila.pop();
    var resultado = ultimoNum2 - ultimoNum;
    this.cuenta -= resultado
  }
}
CalculadoraNPI.prototype.dividir = function(){
  if(this.numerosEnFila.length < 1) {
    throw 'La calculadoraNPI necesita por lo menos 2 números';
  }

  var ultimoNum = this.numerosEnFila.pop();
  var ultimoNum2 = this.numerosEnFila.pop();
  var resultado = ultimoNum2 / ultimoNum;
  this.cuenta = resultado

}
CalculadoraNPI.prototype.valor = function() {
  console.log("this.numerosEnFila", this.numerosEnFila)
  return this.cuenta;
};
  
