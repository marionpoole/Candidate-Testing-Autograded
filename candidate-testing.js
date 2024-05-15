const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = ("Who was the first American woman in space? ");
let correctAnswer = "Sally Ride";
let candidateAnswer = "";

//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ","True or false: 5 kilometer == 5000 meters? ","(5 + 3)/2 * 10 = ? ","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ","What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride","true","40","Trajectory","3"];
let candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  let candidateName = input.question("What is the candidate's name? ");
  return candidateName;
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //let question = ("Who was the first American woman in space? ");
  //let candidateAnswer = input.question(question);
  //return candidateAnswer;
  //loop that programmatically asks each question in the array and stores the user’s responses.
  //let candidateAnswers = [];
  for(let i = 0; i < questions.length; i++){
    candidateAnswers.push(input.question(questions[i]));
    }
     return candidateAnswers;
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  //if (candidateAnswer === correctAnswer) {
  //  console.log("Correct");
  //} else {
  //  console.log("Incorrect");
  //}
//template literal that displays each of the candidate’s responses in addition to the corresponding correct answers
let grade = '';
let totalCorrectAnswers = 0;
for(let i = 0; i < candidateAnswers.length; i++){
  if(candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
    totalCorrectAnswers += 1;
  } else {
    totalCorrectAnswers += 0;
  }
  console.log(`You answered: ${candidateAnswers[i]}. The correct answer is: ${correctAnswers[i]}.`);
}
grade = (totalCorrectAnswers/questions.length) * 100

//(Number of Correct Answers) / (Number of Quiz Questions) * 100
  //TODO 3.2 use this variable to calculate the candidates score.
  console.log(grade + '%');
  if(grade >= 80) {
    console.log('You have passed the test! Congratulations!')
  } else {
    console.log('You have failed the test. Better luck next time!')
  }
  return grade;
}

function runProgram() {
  candidateName = askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log("Hi, " + candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};