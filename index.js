var readlineSync = require('readline-sync');

var userName = readlineSync.question(`What's your name?`);
let score = 0;
console.log(`Welcome ${userName}.  Do you know Tanay?`);

const questions = [
  {
    question:"Where do I live?",
    answer:"bangalore"
  },
  {
    question:"My favourite superhero would be?",
    answer:"batman"
  },
  {
    question:"Where do I work?",
    answer:"microsoft"
  }
];


function play(ans, userAns){

  if(ans === userAns){
    console.log('correct answer!');
    score = score  + 1;
  }else{
    console.log('wrong answer');
  }
  console.log(`Current score: ${score}`);
}




for(let i=0 ;i<questions.length ; i++){
  let userAns = readlineSync.question(questions[i].question);

  play( questions[i].answer, userAns);
}

console.log(`YAY! YOU SCORED ${score}`);