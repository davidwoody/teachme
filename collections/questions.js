Questions = new Meteor.Collection('questions');

Meteor.methods({
  // this is what the object should look like
  // obj = {
  //   questionListNumber: number, 
  //   question: "string",
  //   answer: true/false
  //   polling: true/false
  //   donePolling: true/false
  // }
  createQuestion: function (string, answer, listNumber) {
    var questObj = {};

    questObj.question = string;
    questObj.listNumber = listNumber;
    questObj.answer = answer;
    questObj.polling = false;
    questObj.donePolling = false;


    return Questions.insert(questObj);
  }, //createQuestionsList
}); //methods


