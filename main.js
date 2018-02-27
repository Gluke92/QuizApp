'use strict';
/* global STORE */

let score = 0;
let currentQuestion = 0;

/* when user clicks on next button, add one to current question */
$('.js-generate-form').on('click', '.submit-button', event => {
  currentQuestion++;
  score =+ 10;
});

function generateQuestion() {
  if (currentQuestion < STORE.length) {
    return `
<div class="js-generate-form">
  <h2>${STORE[currentQuestion].question}</h2>
    <form>
        <fieldset>
            <label class="answerOption">
                <input type="radio" value="${STORE[currentQuestion].answers[0]}" name="answer" required/>
                <span>${STORE[currentQuestion].answers[0]}</span>
            </label>
            <label class="answerOption">
                <input type="radio" value="${STORE[currentQuestion].answers[1]}" name="answer" required/>
                <span>${STORE[currentQuestion].answers[1]}</span>
            </label>
            <label class="answerOption">
                <input type="radio" value="${STORE[currentQuestion].answers[2]}" name="answer" required/>
                <span>${STORE[currentQuestion].answers[2]}</span>
            </label>
            <label class="answerOption">
                <input type="radio" value="${STORE[currentQuestion].answers[3]}" name="answer" required/>
                <span>${STORE[currentQuestion].answers[3]}</span>
            </label>
           <button type="submit" class="submit-button">Submit</button>
         </fieldset>
   </form>
</div>`;
  } 
  else {
    return `<div>
    <h1>A Primer on Basic Economics</h1>
    <!-- If you know >8 -->
    <p>Newsweek estimates that over 48% of Americans have no idea how the economy works. Now you're in the 52% who get the basics.</p>
    <!-- If you know between 4-7 -->
    <p>As Arisottle said, "Excellent is not an act, but a habit." Keep working.</p>
    <!-- If you know less less than 4 -->
    <p>Newsweek estimates that over 48% of Americans have no idea how the economy works. You're still there.
    </p>

    <button type="button" class="js-link">Let's Learn How Money Works</button> 
    <button type="button" class="js-restart">Retake the Quiz</button>
</div>`;
    //Need to wire Let's Learn How Money Works Button
  }
}


/* navigate from splash page to quiz */
$('.js-start').on('click', '.start-button', event => {
  $('.js-start').addClass('hidden');
  console.log(`we hidden. here\'s the score: ${score}`);
});

/*genearte HTML for quiz */
$('.js-start').on('click', '.start-button', event => {
  $('.js-form').html(generateQuestion());
  console.log('starting it');
});

// /*when you click button, we should modularize here*/
// $('.js-start').on('click', '.start-button', event => {
//   $('.js-form').html(generateQuestion());
// });

// /*add 1 when you hit submit button*/
$('.js-main').on('click', '.submit-button', event => {
  event.preventDefault();
  console.log('submitting like a boss');

  //store value from submit
  const isItRight = $('input:checked').siblings('span').text(); //why can't I use .val() to capture value from radio?
  console.log(`all right ${isItRight}`);
  //question for tomorrow: how do I access this variable and store it?

  const presentQuestion = STORE[currentQuestion];
  console.log(presentQuestion);

  //compare value to key
  if (presentQuestion.correctAnswer === presentQuestion.answers.findIndex(answer => answer === isItRight))
  {
    console.log('yes');
  }
  else {
    console.log('no');
  }

  // //augment current Question
  currentQuestion++;
  console.log(currentQuestion);
  // regenerate the form 
  $('.js-form').html(generateQuestion());
});


//change score based on value
function nextQuestion () {
  if (currentQuestion < STORE.length) {
    currentQuestion++;
  }
}

//update value
function updateValue () {
  //if selected = right, then update the value
}

//print new text for value


//render next question

function restartQuiz () {
  $('.js-main').on('click', '.js-restart', event => {
    location.reload();
  });
}

function learnMore () {
  $('.js-main').on('click', '.js-link', event => {
    window.location.replace('http://www.tsowell.com/SuggestedRead.htm');
  });
}

restartQuiz();
learnMore();






