// //Exercise 1

// //Fatorial

// const fatorial = param => {
//   let result = param;
//   for (let index = 1; index < param; index += 1) {
//     result = result * index;
//   }
//   return result;
// }

// console.log(fatorial(5));


// //Recursiva

// const fatorial = (n) => (n === 0) ? n =1 : n * fatorial (n -1);
// console.log(fatorial(5)); 

// //Exercise 2

// const longestWord = param => {
//   let arrayWords = param.split(' ');
//   let countLetters = 0;
//   let resultWord = '';
  
//   for(let index of arrayWords) {
//     if (index.length > countLetters) {
//       countLetters = index.length;
//       resultWord = index;
//     }
//   }
//   return resultWord;
// }

// console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));

// //Exercise 3


// //Dire

// //Exercise 4

// const array = ["Android", "iOS", "Architecture", "Teach", "Run"]

// function buildSkillsPhrase (paramOne) {
//     const fun1 = paramInner => (
//       `Tryber ${paramInner} aqui!

//       Tudo bem?`
//     )

//     let result = `${fun1(paramOne)}

//     Minhas cinco principais habilidades são:`

//     array.forEach((skill, index) =>
//     result = `${result}

//     - ${skill}`)

//     result = `
//     ${result}

//     #goTrybe
//     `

//     return result
// }

// console.log(buildSkillsPhrase("Lucas"))

// const student1 = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkills: 'Ótimo',
// };

// const student2 = {
//   Html: 'Bom',
//   Css: 'Ótimo',
//   JavaScript: 'Ruim',
//   SoftSkills: 'Ótimo',
//   Git: 'Bom', // chave adicionada
// };

// const listSkills = (student) => {
//   const arrayOfSkills = Object.keys(student);
//   const arrayOfSkillsValues = Object.values(student)
//   for(index in arrayOfSkills) {
//     console.log(`${arrayOfSkills[index]}, Nível: ${arrayOfSkillsValues[index]}`);
//   }
// }

// console.log('Estudante 1');
// listSkills(student1);

// console.log('Estudante 2');
// listSkills(student2);

// const países = {
//   França: 'Paris',
//   Brasil: 'Brasília',
//   Espanha: 'Madrid',
//   Portugal: 'Lisboa',
// };
// const pairKeyValue = Object.entries(países);
// console.log(pairKeyValue);

// for(index in pairKeyValue) {
//   console.log('--------');
//   console.log('Pais:', pairKeyValue[index][0]);
//   console.log('Capital:', pairKeyValue[index][1]);
// };


const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const name = order.name;
  const phoneNumber = order.phoneNumber;
  const address = order.address.street;
  const number = order.address.number;
  const complement = order. address.apartment;

  console.log(`Olá ${deliveryPerson}, entrega para: ${name}, telefone: ${phoneNumber}, ${address}, ${number}, Ap: ${complement}.`)
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const otherBuy = order.name = 'Luiz Silva';
  const newOrder = order.order.pizza = ['muzzarella','calabresa'];
  const drinks = order.order.drinks.coke.type;
  const price = order.payment = '50';
  
  console.log(`Olá ${otherBuy}, o total do seu pedido de ${newOrder} e ${drinks} é R$ ${price},00.`);

}

orderModifier(order);

//Parte II

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addShift = (obj, key, value) => {
  obj[key] = value;
  console.log(lesson1, lesson2, lesson3)
};

addShift(lesson2, 'turno', 'noite');

const showList = (obj) => Object.keys(obj);
console.log(showList(lesson3));

const sizeList = (obj) => Object.keys(obj).length;
console.log(sizeList(lesson3));

const showValues = (obj) => Object.values(obj);
console.log(showValues(lesson3));

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

const sumAllStudents = (obj) => {
  let mountStudents = 0;
  const array = Object.keys(obj);
  for (let index = 0; index < array.length; index += 1) {
    mountStudents += obj[array[index]].numeroEstudantes;    
  }
  return (`Total é de: ${mountStudents} alunos`);
}

console.log(sumAllStudents(allLessons));

const getValueByNumber = (obj,index) => Object.values(obj)[index];
console.log(getValueByNumber(lesson3, 0));

const verifyPair = (obj, key, value) => {
  const array = Object.entries(obj);
  for (let index = 0; index < array.length; index++) {
    if(array[index][0] === key && array[index][1]=== value){
      return true;
    } else {
      return false;
    }    
  }
}

console.log(verifyPair(lesson1, 'materia', 'Português'));