function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

function createDaysOfTheMonth() {
  const monthDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
  const monthDaysList = document.querySelector('#days');

  for (let i = 0; i < monthDays.length; i += 1) {
    const day = monthDays[i];
    const dayItem = document.createElement('li');
    if (day === 25) {
      dayItem.className = 'day holiday friday';
      dayItem.innerHTML = day;
      monthDaysList.appendChild(dayItem)
    } else if (day === 24 || day === 31) {
      dayItem.className = 'day holiday';
      dayItem.innerHTML = day;
      monthDaysList.appendChild(dayItem)
    } else if (day === 4 || day === 11 || day === 18) {
      dayItem.className = 'day friday';
      dayItem.innerHTML = day;
      monthDaysList.appendChild(dayItem)
    } else {
      dayItem.className = 'day';
      dayItem.innerHTML = day;
      monthDaysList.appendChild(dayItem)
    }
  }
}

createDaysOfTheMonth();

function createButHoliday(name) {
  const bc = document.querySelector('.buttons-container');
  const newB = document.createElement('button');
  newB.id = 'btn-holiday';
  newB.innerHTML = name;
  bc.appendChild(newB);
}

createButHoliday('feriados');

const newB = document.querySelector('#btn-holiday');

function showHoliday() {
  const holiday = document.querySelectorAll('.holiday');
  const branco = "white";
  const corPadrao = "rgb(238,238,238)";
  for (i = 0; i < holiday.length; i += 1) {
    if (holiday[i].style.backgroundColor === branco) {
      holiday[i].style.backgroundColor = corPadrao;
    } else {
      holiday[i].style.backgroundColor = branco;
    }
  }
}

newB.addEventListener('click', showHoliday);

function createButFriday(name) {
  const bc = document.querySelector('.buttons-container');
  const newBFriday = document.createElement('button');
  newBFriday.className = 'btn-friday';
  newBFriday.innerHTML = name;
  bc.appendChild(newBFriday);
}

createButFriday('Sexta-feira');

const newBFriday = document.querySelector('.btn-friday');
const gaveta = [];

function showFriday() {
  const friday = document.getElementsByClassName('friday');
  const sextou = "Sextou!";

  for (i = 0; i < friday.length; i += 1) {
    gaveta.push(friday[i].innerHTML);
    if (friday[i].innerHTML !== sextou) {
      friday[i].innerHTML = sextou;
    } else {
      friday[i].innerHTML = gaveta[i];
    }
  }
}

newBFriday.addEventListener('click', showFriday);

let d = document.querySelector('#days');

function zoom(evento) {
  evento.target.style.fontSize = '30px';
}

function dzoom(evento) {
  evento.target.style.fontSize = '20px';
}

d.addEventListener('mouseover', zoom);
d.addEventListener('mouseout', dzoom);

const mytasks = document.querySelector('.my-tasks');

function addTask(tasks) {
  const nTask = document.createElement('span');
  nTask.innerHTML = tasks;
  mytasks.appendChild(nTask);
}

addTask('cozinhar');

const colorTask = document.createElement('div');

function legendColor(cor) {
  colorTask.className = 'task';
  colorTask.style.backgroundColor = cor;
  mytasks.appendChild(colorTask);
}

legendColor('green')

const LegTask = document.querySelector('.task')
const taskSelected = document.getElementsByClassName('task selected');

function selectedTask(evento) {
  if (taskSelected.length === 1) {
    evento.target.className = 'task';
  } else {
    evento.target.className = 'task selected';
  }
}

LegTask.addEventListener('click', selectedTask);

const colorGreen = colorTask.style.backgroundColor;
const colorPadrao = 'rgb(119,119,119)';
let colorGet =  colorPadrao;

function colorDay(evento) {
  colorGet =  evento.target.style.color;

  if (taskSelected.length === 1 && colorGet === colorGreen) {
    evento.target.style.color = colorPadrao;
  }

  if (taskSelected.length === 1 && colorGet !== colorGreen) {
    evento.target.style.color = colorGreen;
  }
}

d.addEventListener('click', colorDay);
