//  crearCalculadora = () => {
//   {};
// }
// calculadora = crearCalculadora();
// calculadora.valor = () => {
//   valor = 0;
//   return valor;
// }; 
// calculadora.sumar = (num) => {
//    calculadora.valor+= num
// }


// ////////////////////////////////



// var crearCalculadora = function(){
//   var valorActual = 0

// 	let obj = {
// 		valor: function valor(){
// 			return valorActual
// 		},

// 		sumar: function sumar(num){
// 			valorActual = valorActual + num
// 			return valorActual
// 		},

// 		restar: function restar(num){
// 			valorActual = valorActual - num
// 		},

// 		reset: function reset(num){
// 			valorActual = 0
// 		}
// 	}

// 	return obj
// }
var crearCalculadora = function(){
	 return {
		valorOriginal: 0,
		valor: function(){
			return this.valorOriginal;
		},
		fn: function(){
			return this.valor;
		},
		sumar: function(num){
			this.valorOriginal+= num;
		},
		restar: function(num){
			this.valorOriginal-= num;
		},
		reset: function(){
			this.valorOriginal = 0;
		}
		

}} ;
var calculadora = crearCalculadora;
 
	