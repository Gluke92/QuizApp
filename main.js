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
    return `<h2>${STORE[currentQuestion].question}</h2>
<div class="js-generate-form">
    <form>
        <fieldset>
            <label class="">
                <input type="radio" value="${STORE[currentQuestion].answers[0]}" name="answer" required>
                <span>${STORE[currentQuestion].answers[0]}</span>
            </label>
            <label class="">
                <input type="radio" value="${STORE[currentQuestion].answers[1]}" name="answer" required>
                <span>${STORE[currentQuestion].answers[1]}</span>
            </label>
            <label class="">
                <input type="radio" value="${STORE[currentQuestion].answers[2]}" name="answer" required>
                <span>${STORE[currentQuestion].answers[2]}</span>
            </label>
            <label class="">
                <input type="radio" value="${STORE[currentQuestion].answers[3]}" name="answer" required>
                <span>${STORE[currentQuestion].answers[3]}</span>
            </label>
        </fieldset>
    </form>
    <button type="submit" class="submit-button">Submit</button>
</div>`;
  } 
  else {
    `<div>
    <h1>A Primer on Basic Economics</h1>
    <!-- If you know >8 -->
    <p>Newsweek estimates that over 48% of Americans have no idea how the economy works. Now you're in the 52% who get the basics.</p>
    <!-- If you know between 4-7 -->
    <p>As Arisottle said, "Excellent is not an act, but a habit." Keep working.</p>
    <!-- If you know less less than 4 -->
    <p>Newsweek estimates that over 48% of Americans have no idea how the economy works. You're still there.
    </p>

    <button type="submit" class="">Let's Learn How Money Works</button>
    <button type="submit" class="">Retake the Quiz</button>
</div>`;
  }
}


/* navigate from splash page to quiz */
$('.js-start').on('click', '.start-button', event => {
  $('.js-start').addClass('hidden');
});

/*genearte HTML for quiz */
$('.js-start').on('click', '.start-button', event => {
  $('.js-form').css('display', 'block');
  $('.js-form').html(generateQuestion());
  console.log('did it');
});

// /*when you click button, we should modularize here*/
// $('.js-start').on('click', '.start-button', event => {
//   $('.js-form').html(generateQuestion());
// });


// /*add 1 when you hit submit button*/
$('.js-main').on('click', '.submit-button', event => {
  event.preventDefault();
  console.log('submitting like a boss');

  // //augment current Question
  currentQuestion++;

  // regenerate the form 
  $('.js-form').html(generateQuestion());

  //store value from submit
  const isItRight = $('input[type=radio][name=answer]:checked').val();
  console.log(isItRight);

  //compare value to key

  //change score based on value

  //update value

  //print new text for value

  //render next question
});



