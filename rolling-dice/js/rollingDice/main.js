// Put your code here
console.log("Let's roll some dice, baby!");
console.log('---------------------------');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const roll = () => {
  const value = getRandomInt(1, 6);
  let face;
  switch (value) {
    case 1:
      face = '\u2680';
      break;
    case 2:
      face = '\u2681';
      break;
    case 3:
      face = '\u2682';
      break;
    case 4:
      face = '\u2683';
      break;
    case 5:
      face = '\u2684';
      break;
    case 6:
      face = '\u2685';
      break;
  }
  return {
    value,
    face,
  };
};

for (let i = 0; i < 10; i++) {
  const die1 = roll();
  const die2 = roll();

  let message = `${die1.face} + ${die2.face} == ${die1.value + die2.value}`;
  if (die1.value === die2.value) {
    message += ' DOUBLES!';
  }
  console.log(message);
}
