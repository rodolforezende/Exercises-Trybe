//Exercício 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

//Exercício 2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  result += numbers[index];
}

console.log(result);

//Exercício 3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}

let average = sum / numbers.length;

console.log(average);

//Exercício 4
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  result += numbers[index];
}

result = result / numbers.length;

if (result > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}

//Exercício 5
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// o valor da variável higherNumber poderia ser qualquer um, desde que fosse menor que o menor número do array numbers. Caso atribuíssemos o valor 101 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número maior que 101 no array. Para resolver esse problema vamos iniciar a variavel com o primeiro valor do array. Dessa forma podemos pular a posição 0 e iniciar com index = 1

let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
}

console.log(higherNumber);

//Exercício 6
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    result += 1;
  }
}

if (result === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(result);
}

//Exercício 7
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    result += 1;
  }
}

if (result === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(result);
}

//Exercício 8
let numbers = [];

for (let index = 1; index <= 25; index += 1) {
  numbers.push(index);
}

console.log(numbers);

//Exercício 9

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index] / 2);
  };

//Bônus

//Exercício 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);

//Exercício 2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);

//Exercício 3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    newArray.push(numbers[index] * numbers[index + 1]);
  } else {
    newArray.push(numbers[index] * 2);
  }
}

console.log(newArray);