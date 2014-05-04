Questions = new Meteor.Collection('questions');

var removeEmptyFromArray = function (stringArray) {
    for (var i = stringArray.length; i--;) {
        if (stringArray[i] === null || stringArray[i].trim() === "") {
            stringArray.splice(i, 1);
        }
    }
}

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

        removeEmptyFromArray(answerOptions);

        questionObj.question = questionText;
        questionObj.listNumber = listNumber;
        questionObj.answerOptions = answerOptions;
        questionObj.correctAnswer = correctAnswer;
        questionObj.donePolling = false;

        return Questions.insert(questionObj);
    }, //createQuestionsList
}); //methods


