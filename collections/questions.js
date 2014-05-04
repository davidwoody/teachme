Questions = new Meteor.Collection('questions');

Meteor.methods({
    // this is what the object should look like
    // obj = {
    //   listNumber: number, 
    //   question: "string",
    //   answer: true/false
    //   donePolling: true/false
    // }
    createQuestion: function (questionText, answerOptions, correctAnswer, listNumber) {
        var questionObj = {};

        questionObj.question = questionText;
        questionObj.listNumber = listNumber;
        questionObj.answerOptions = answerOptions;
        questionObj.correctAnswer = correctAnswer;
        questionObj.donePolling = false;

        return Questions.insert(questionObj);
    }, //createQuestionsList
}); //methods


