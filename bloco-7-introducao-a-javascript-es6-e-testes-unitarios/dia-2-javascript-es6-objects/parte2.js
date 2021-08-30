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

const addTurn = (obj, key, value) => obj[key] = value;

addTurn(lesson2, 'turno', 'manhã');

const listKeys = obj => console.log(Object.keys(obj));

const showSize = obj => console.log(Object.keys(obj).length);

const listValues = obj => console.log(Object.values(obj));

const allLessons = Object.assign({}, { lesson1 }, { lesson2 }, { lesson3 });

const showStudents = obj => {
  total = 0;
  for (i in Object.keys(obj)) {
    const aux = Object.keys(obj)[i];
    total += obj[aux].numeroEstudantes;
  }
  console.log(total);
}

const getValueByNumber = (obj, key) => console.log(Object.values(obj)[key]);

const verifyPair = (obj, key, value) => {
  const pairs = Object.entries(obj);
  let equal = false;
  for (i in pairs) {
    if (pairs[i][0] === key && pairs[i][1] == value) {
      equal = true;
    }
  }
  console.log(equal);
}

