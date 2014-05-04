Questions = new Meteor.Collection('questions');

Meteor.methods({
  // this is what the object should look like
  // obj = {
  //   questionListId: "hlkjklh", 
  //   question: "string",
  //   answer: true/false
  //   polling: true/false
  //   donePolling: true/false
  // }
  createQuestion: function (string, bool) {
    var questObj = {};

    questObj.question = string;
    questObj.answer = bool;
    questObj.polling = false;
    questObj.donePolling = false;


    return Questions.insert(questObj);
  }, //createQuestionsList
}); //methods


