'use strict';

let userName = prompt('Hello, stranger! What is your name?');
alert('Greetings, ' + userName + '! My name is Ayrat. Try to guess some facts about me. Answer Yes or No to the folloiwng five questions!');

let siblings = prompt('Do I have any siblings? Yes/No or Y/N');
let siblingsLowerCase = siblings.toLowerCase();
if (siblingsLowerCase === 'yes' || siblingsLowerCase === 'y') {
  alert('I wish. But I\'m the only child in the family.');
}
else if (siblingsLowerCase === 'no' || siblingsLowerCase === 'n') {
  alert('Correct! I don\'t have any siblings, so I\'m probably spoiled.');
}
else {
  alert('I didn\'t get that. That\'s ok, we\'ll move to the next question.');
}

let fearHeights = prompt('Am I scared of heights? Yes/No or Y/N');
let fearHeightsLowerCase = fearHeights.toLowerCase();
if (fearHeightsLowerCase === 'yes' || fearHeightsLowerCase === 'y') {
  alert('Good try. But I actually like activities that involve heights, such as skydiving!');
}
else if (siblingsLowerCase === 'no' || siblingsLowerCase === 'n') {
  alert('You are right! In fact, I most likely was a bird in the past life!');
}
else {
  alert('I didn\'t get that. That\'s ok, we\'ll move to the next question.');
}

let languages = prompt('Do I speak more than 3 languages? Yes/No or Y/N');
let languagesLowerCase = languages.toLowerCase();
if (languagesLowerCase === 'yes' || languagesLowerCase === 'y') {
  alert('You got it! I speak Tatar, Russian, English and Turkish.');
}
else if (languagesLowerCase === 'no' || languagesLowerCase === 'n') {
  alert('Missed this one. I do speak 4 different languages: Tatar, Russian, English and Turkish.');
}
else {
  alert('I didn\'t get that. That\'s ok, we\'ll move to the next question.');
}

let penguin = prompt('Have I ever seen a penguin out in the wild? Yes/No or Y/N');
let penguinLowerCase = penguin.toLowerCase();
if (penguinLowerCase === 'yes' || penguinLowerCase === 'y') {
  alert('True! I got to see world\'s smallest penguins on the beach in New Zealand! They are adorable.');
}
else if (penguinLowerCase === 'no' || penguinLowerCase === 'n') {
  alert('I actually have. You can also see some if you go to New Zealand!');
}
else {
  alert('I didn\'t get that. That\'s ok, we\'ll move to the next question.');
}

let flyPLane = prompt('Do I know how to pilot a plane!');
let flyPLaneLowerCase = flyPLane.toLowerCase();
if (flyPLaneLowerCase === 'yes' || flyPLaneLowerCase === 'y') {
  alert('Not yet! But I will definitely learn one day!');
}
else if (flyPLaneLowerCase === 'no' || flyPLaneLowerCase === 'n') {
  alert('Unfortunately, you are right! But it\'s only a matter of time when learn!');
}
else {
  alert('I didn\'t get that. But thank you anyway for participating!');
}

