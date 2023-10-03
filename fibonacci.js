console.time("Terminou");

const calculoFibonacci = (numero) => {
  let a = BigInt(0),
    b = BigInt(1);

  if (!Number.isFinite(numero)) {
    numero = 0;
  }

  for (let i = BigInt(0); i < numero; i++) {
    [a, b] = [b, a + b];
  }
  return a.toString();
};

const calculo = calculoFibonacci(10);
console.log(calculo);

console.timeEnd("Terminou");
