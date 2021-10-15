function textoAleatorio() {
  let letras = "abcdefghijklmnopqrstuvwxyz";
  let aleatorio = "";
  for (let i = 3; i <= 5; i++) {
    let rnum = Math.floor(Math.random() * letras.length);
    aleatorio += letras.substring(rnum, rnum + 1);
  }
  return aleatorio;
}

let palavras = [];
for (let j = 0; j < 10000; j++) {
  palavras.push(textoAleatorio());
}

const checkPalindrome = (str) => str === str.split("").reverse().join("");
const resultados = palavras.map(checkPalindrome);

let palindromos = [];

for (let i = 0; i < resultados.length; i++) {
  const element = resultados[i];
  if (element === true) {
    palindromos.push(element);
  }
}

console.log(palindromos.length);
