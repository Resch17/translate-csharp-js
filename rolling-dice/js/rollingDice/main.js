// // Put your code here
// console.log("Let's roll some dice, baby!");
// console.log('---------------------------');

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const roll = () => {
//   const value = getRandomInt(1, 6);
//   let face;
//   switch (value) {
//     case 1:
//       face = '\u2680';
//       break;
//     case 2:
//       face = '\u2681';
//       break;
//     case 3:
//       face = '\u2682';
//       break;
//     case 4:
//       face = '\u2683';
//       break;
//     case 5:
//       face = '\u2684';
//       break;
//     case 6:
//       face = '\u2685';
//       break;
//   }
//   return {
//     value,
//     face,
//   };
// };

// for (let i = 0; i < 10; i++) {
//   const die1 = roll();
//   const die2 = roll();

//   let message = `${die1.face} + ${die2.face} == ${die1.value + die2.value}`;
//   if (die1.value === die2.value) {
//     message += ' DOUBLES!';
//   }
//   console.log(message);
// }

const string =
  'Minuet in G Major, BWV App. 114 * Minuet in G minor, BWV App. 115 * Minuet in G Major, BWV App. 116 * Polonaise in G minor, BWV App. 119 * March in D Major, BWV 122 * Minuet in G Major from Overture in G minor, BWV 822 * Minuet in G minor from Overture in G minor, BWV 822 * Minuet in G minor (II) from Overture in G minor, BWV 822 * March in G Major, BWV App. 124 * Minuet in D minor, BWV App. 132 * Musett in G Major from English Suite No. 3, BWV 808 * Bourree in E minor from Lute Suite No. 1, BWV 996 * Musette in D Major, BWV App. 126 * Minuet in C minor, BWV App. 121 * Gavotte in G minor from Overture in G minor, BWV 822 * March in E-flat Major, BWV App. 127 * Polonaise in G minor BWV App. 125 * Gavotte in D Major from English Suite No. 6, BWV 811 * Polonaise in G Major, BWV App. 130 * Gavotte in G minor from English Suite No. 3, BWV 808 * Minuet in F Major from Overture in F Major, BWV 820 * Polonaise in G minor, BWV App. 123 * Gavotte in G Major from French Suite No. 5, BWV 816 * Minuet in E Major from French Suite No. 6 in E Major, BWV 817 * Scherzo in A minor from Partita No. 3, BWV 827 * Sarabande in E minor from English Suite No. 5, BWV 810 * Minuet in C minor from French Suite No. 2 in C minor, BWV 813 * Prelude in F minor from Suite in F minor, BWV 823';

const array = string.split(' * ');

const listOutput = document.getElementById('list');

array.forEach((i) => {
  listOutput.innerHTML += `<li>${i}</li>`;
});

console.log(array);
