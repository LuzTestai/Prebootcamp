var factorialIterativo = function(num) {
  var resultado = num;
  while (num > 1) {
    resultado *= num - 1;
    --num;
  }
  return resultado;
};
function factorial(n, total = 1) {
  if (n === 0) return total;
  total = n * total;
  n--;
  return factorial(n, total);
}

function fib(n) {
  if (n === 0 || n === 1) return 1;
  n--;
  return fib(n) + fib(n - 1);
}
