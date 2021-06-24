const allMelodys = [];

let counterAllMelodys = 0;

var melody1 = new Audio('');

var melody1ButtonElement = document.getElementById('melody1Button');

let counterMelody1 = 0;

melody1ButtonElement.addEventListener('click', function () { 
  melody1.play();
  if (counterMelody1 < 1) {
    allMelodys.push('Melody 1');
    counterMelody1++;
    counterAllMelodys++;
  }
  if (counterMelody1 === 1 && counterMelody2 === 1) {
    counterMelody1--;
    counterMelody2--;
    counterAllMelodys -= 2;
    allMelodys.pop();
    allMelodys.pop();
  }
});

var melody2 = new Audio('');

var melody2ButtonElement = document.getElementById('melody2Button');

let counterMelody2 = 0;

melody2ButtonElement.addEventListener('click', function () { 
  melody2.play();
  if (counterMelody2 < 1 && counterMelody1 === 1) {
    allMelodys.push('Melody 2');
    counterMelody2++;
    counterAllMelodys++;
  } 
});

var melody3 = new Audio('');

var melody3ButtonElement = document.getElementById('melody3Button');

let counterMelody3 = 0;

melody3ButtonElement.addEventListener('click', function () { 
  melody3.play();
  if (counterMelody3 < 1 && counterMelody1 === 1 && counterMelody2 === 1) {
    allMelodys.push('Melody 3');
    counterMelody3++;
    counterAllMelodys++;
  }
  if (counterMelody3 < 1 && counterMelody1 === 1 && counterMelody2 < 1) {
    counterMelody1--;
    counterAllMelodys--;
    allMelodys.pop();
  }
  if (counterAllMelodys === 3) {
    alert('richtig');
  }
});