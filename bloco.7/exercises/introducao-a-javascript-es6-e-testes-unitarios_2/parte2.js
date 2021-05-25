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


const addNewKey = (obj, key, value) => {
    obj[key] = value;
  };
  
addNewKey(lesson2, 'turno', 'noite');

const listKeys = (obj) =>  Object.keys(obj);
console.log(listKeys(lesson1));

const sizeObj = (obj) =>  Object.keys(obj).length;
console.log(sizeObj(lesson1));

const listValues = (obj) =>  Object.values(obj);
console.log(listValues(lesson1));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

const getNumberOfStudents = (obj) => {
    let total = 0;
    const array = Object.keys(obj);
    for (index in array) {
      total += obj[array[index]].numeroEstudantes;
    }
    return total;
  };
console.log(getNumberOfStudents(allLessons));

const getValueByNumber = (obj,number) => Object.values(obj)[number];
console.log(getValueByNumber);

const verifyPair = (obj, key, value) => {
    const arr = Object.entries(obj);
    let isEqual = false;
    for (let index in arr) {
      if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
    }
    return isEqual;
  };
  console.log(verifyPair(lesson2,'professor','Carlos'));

//Bônus

const getNumberOfStudentsMath = (obj) => {
    let total = 0;
    const array = Object.keys(obj);
    for (index in array) {
      if(obj[array[index]].materia === 'Matemática'){
      total += obj[array[index]].numeroEstudantes;
      }
    }
    return total;
  }
  console.log(getNumberOfStudents(allLessons));

  const getInfo = (obj, name) => {
    const allLessons = [];
    let allStudent = 0;
    const array = Object.values(obj);
    for (index in array) {
      if (array[index].professor === name) {
        allLessons.push(array[index].materia)
        allStudent += array[index].numeroEstudantes;
      }
    }
    return { lessons: allLessons, estudantes: allStudent };
  }
  
  const createReport = (allLessons, name) => {
    const report = {};
    report.professor = name;
    Object.assign(report, getInfo(allLessons, name));
    return report;
  }
  console.log(createReport(allLessons, 'Maria Clara'));



