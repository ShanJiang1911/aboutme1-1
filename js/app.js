'use strict';

let userName = prompt('Hello, stranger! What is your name?');
alert('Greetings, ' + userName + '! My name is Ayrat. Try to guess some facts about me. Answer Yes or No to the folloiwng five questions!');


let rightAnswers = 0;

function yesNoQuestions() {

  let questions = [
    ['Do I have any siblings? Yes or No', 'Correct! I don\'t have any siblings, so I\'m probably spoiled.', 'I wish. But I\'m the only child in the family.', ],

    ['Am I scared of heights? Yes or No', 'You are right! In fact, I most likely was a bird in the past life!', 'Good try. But I actually like activities that involve heights, such as skydiving!'],

    ['Do I speak more than 3 languages? Yes or No', 'You got it! I speak Tatar, Russian, English and Turkish.', 'Missed this one. I do speak 4 different languages: Tatar, Russian, English and Turkish.' ],

    ['Have I ever seen a penguin out in the wild? Yes or No', 'True! I got to see world\'s smallest penguins on the beach in New Zealand! They are adorable.', 'I actually have. You can also see some if you go to New Zealand!'],

    ['Do I know how to pilot a plane! Yes or No', 'You are right! But I will learn sometimes!', 'Not yet! But I will definitely learn one day!']
  ];

  let correctYesNoAnswer = ['no', 'no', 'yes', 'yes', 'no'];

  for(let n=0; n<questions.length; n++) {
    let userYesNoAnswer = prompt(questions[n][0]);
    let userYesNoAnswerLowerCase = userYesNoAnswer.toLowerCase();
    if (userYesNoAnswerLowerCase === 'yes' || userYesNoAnswerLowerCase === 'no') {
      if (userYesNoAnswerLowerCase === correctYesNoAnswer[n]){
        alert(questions[n][1]);
        rightAnswers++;
      } else {
        alert(questions[n][2]);
      }
    } else {
      alert('The only acceptable answers are Yes or No');
      n--;
    }
  }
}

yesNoQuestions();
alert('You got ' + rightAnswers + ' answers correct out of 5!');


function guessNumberGame() {
  let correctAnswer = Math.floor(Math.random()*30 + 1);
  let remainingAttmepts = 3;

  for (let i=0; i < 4; i++) {
    let userGuessInput = prompt('Guess a number between 1 and 30.');
    let numericalGuess = parseInt(userGuessInput);
    if (numericalGuess === correctAnswer) {
      alert('Congrats! You won! ' + correctAnswer + ' was the number I had in mind!');
      i=5;
      rightAnswers++;
    } else if (remainingAttmepts < 1) {
      alert('It was ' + correctAnswer + '. You are down on your luck today!');
    } else if(numericalGuess < correctAnswer) {
      alert('Too low. Attempts left: ' + remainingAttmepts);
    } else if(numericalGuess > correctAnswer) {
      alert('Too high. Attempts left: ' + remainingAttmepts);
    } else {
      alert('Please use a valid number. Attempts left: ' + remainingAttmepts);
    }

    remainingAttmepts--;
  }
}

guessNumberGame();


function favoriteCountriesGame() {
  let favoriteCountries = ['new zealand', 'iceland', 'austria', 'finland', 'portugal', 'japan', 'spain', 'switzerland', 'norway', 'vietnam'];

  let counter = 6;
  let theyGotItRight = false;

  while (counter > 0 && theyGotItRight === false) {

    let userGuess1 = prompt('Guess one of the 10 countries on my bucket list to visit.');
    let userGuess = userGuess1.toLowerCase();

    for (let i=0; i < favoriteCountries.length; i++) {
      if (userGuess === favoriteCountries[i]) {
        alert('You got it! Here is the full list: ' + favoriteCountries);
        theyGotItRight = true;
        rightAnswers++;
      }
    }

    counter--;

    if (counter <1) {
      alert('Sorry, you got all of them wrong. Here is my full bucket list:' + favoriteCountries);
    } else if (theyGotItRight === false) {
      alert(userGuess1 + ' is not on my bucket list. You have ' + counter + ' guesses!');
    }
  }
}

favoriteCountriesGame();

alert(userName + '! You got ' + rightAnswers + ' answers correct out of 7!');


