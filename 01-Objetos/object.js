// setPropsOnObj = (obj) => { 
//     obj.p = 5;
//     obj.plataforma = 5;
//     obj.proximo = function (num){
//       return num + 1
//     };
//     obj.la = {
//       clave: {
//         secreta: {
//           es: 404
//         }
//       }
//     }
  
//   };

//   setPropsOnArr = (array) => {
//     array.hola = () => {
//       return 'Hola!'
//     };
//     array.river = 'plate';
//     array[0] = 5;
//     array.doble = (num) =>{
//       return num*2
//     }

//   };

//    functionObject = () => {
//     return 'Soy una función con propiedades!';
//   };
//     setPropsOnFunc = (functionObject) => { 
//     functionObject.year = '2017';
//     functionObject.mitad = (mitad) => {
//     return mitad/2
//     };
    
//     functionObject.prototype = {
//        helloWorld:  function() {
//          return 'Hello World'
//         }  
//       }
//     };


var setPropsOnObj = function(obj){
  obj.p = 5;
  obj.plataforma = 5;
  obj.proximo= function(a){return a+1};
  obj.la = {clave: {secreta: {es: 404}}};
  
}

var setPropsOnArr = function(array){
    array.hola = function(){return 'Hola!'};
    array.river = "plate";
    array.unshift(5);
    array.doble = function(num){return num*2}

 }


var functionObject = function(){
  return 'Soy una función con propiedades!'
}


var setPropsOnFunc = function(functionObject){
  functionObject.year = '2017';
  functionObject.mitad = function(a){return a/2};
  functionObject.prototype = {helloWorld: function(){return 'Hello World'}}
  }

  setPropsOnFunc()

  

  
