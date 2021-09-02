const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B']; // 5

const repeat = (RIGHT_ANSWERS, STUDENT_ANSWERS, action) => {
  let nota = 0;
  for (let i = 0; i < STUDENT_ANSWERS.length; i += 1) {
    if (action(RIGHT_ANSWERS[i], STUDENT_ANSWERS[i]) != undefined) {
      nota += action(RIGHT_ANSWERS[i], STUDENT_ANSWERS[i]);
    }
  }
  return nota;
}

console.log(repeat(RIGHT_ANSWERS, STUDENT_ANSWERS, (gabarito, respota) => {
  if (respota === gabarito) {
    return 1;
  } else if (respota !== 'N.A' && respota !== gabarito) {
    return -0.5;
  }
}));