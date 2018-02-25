'use strict';
// let currentQuestion = 0;
// Object.keys(STORE[0].answers).map(id => {STORE[currentQuestion].answers[id]}) -> 1st ID -> returns array of [0, 1, 2, 3] 
const STORE = [
  { 
    /* Q1 */ 
    question: 'What is the fundamental condition that causes an economy to exist?' , 
    answers: [
      'Scarcity',
      'The gold standard',
      'Resources',
      'Class warfare'
    ],
    correctAnswer: 0 /* index of correct answer */ 
    // answers[correctAnswer] to get correct answer. 
    //randomizing answers -> answers into Object -> use Object.keys
    /* display error message */
  },
  {
    /* Q2 */
    question: 'When do we experience economic scarcity?',
    answers: [
      'When a given amount of goods has limited and mutually exclusive alternative uses',
      'When goods are hard to find due to the depeltion of natural resources.',
      'When a particular good is a rare find a given context',
      'When people really want new Jordans'
    ],
    correctAnswer: 'When a given amount of goods has limited and mutually exclusive alternative uses',
  },
  {
    /* Q3 */
    question: 'One of the most effective methods for making housing affordable is to set a price ',
    answers: [
      'Yes. It\'ll make all the girls go wo.',
      'Yes. If you\'re short.',
      'No. It makes your landlord angry.',
      'No. Remember Ozwald? Right. That\'s the point.'
    ],
    correctAnswer: 'Yes. If you\'re short.'
  },
  {
    /* Q4 */
    question: ' In the 16th century, the Spanish colony Antwerp rebelled against Spain. Spain sent a blockade to starve Antwerp out and force their surrender. As the supply of goods from Spain ceased, what did this do to the price of goods in Antwerp?',
    answers: [
      'Nothing.',
      'The price increased, because the law of supply tells us that when consumers have less supplies, they’ll pay more money.',
      'The price increased, because the law of supply tells us that producers will charge greater prices when they have fewer supplies.',
      'The price increased, because the level of demand from Antwerp stayed the same, but the level of goods supplied by Spain decreased. Therefore, the price of goods in Spain increased.'
    ],
    correctAnswer: 'The price increased, because the level of demand from Antwerp stayed the same, but the level of goods supplied by Spain decreased. Therefore, the price of goods in Spain increased.'
  },
  {
    /* Q5 */
    question: 'In India, in the eighteenth century, there were famines in Bagawat. In order to combat the reality of starving people, the Indian government subsidized (supported) the growing of grain. This meant that farmers were being supported to produce a certain quota of grain, regardless of the market demand. Relative to scarcity, how was this a myopic response to the famine? Sure why not',
    answers: [
      'Sure why not',
      'I know you are but what am I',
      'Huh',
      'Nope'
    ],
    correctAnswers: 'Sure why not'
  },
  {
    /* Q6 */
    question: 'In the 19th century, these famines occurred again, but for various reasons, the British government which had made India a colony chose to have a free market for trade to occur. What do you predict happened and why?',
    answers: [
      'NO change.',
      'Famine still went.',
      'Famine was met',
      'Famine was met. '
    ],
    correctAnswers: 'Famine was met'
  },
  {
    /* Q7 */
    question: ' Is knowledge a scarce good?',
    answers: [
      'No',
      'Y',
      'N',
      'Y'
    ],
    correctAnswers: 'Y'
  },
  {
    /* Q8 */
    question: 'How is a material shortages different than an artificial shortage?',
    answers: [
      'N',
      'N',
      'Y',
      'N'
    ],
    correctAnswers: 'Y'
  },
  { 
    /* Q9 */ 
    question: 'What does a “price” represent? ',
    answers: [
      'N',
      'N',
      'N',
      'Y'
    ],
    correctAnswers: 'Y'
  },
  {
    /* Q10 */ 
    question: 'In the Soviet Union, there was a centralized and planned economy. Theoretically, the more control we can exert over production and supply, the more efficiently we can meet the needs of those who request given goods and resist the corruption of those who would demand a high price. ',
    answers: [
      'N',
      'Y',
      'N',
      'N'
    ],
    correctAnswers: 'Y'
  }
];
