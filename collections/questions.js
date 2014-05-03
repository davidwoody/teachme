Questions = new Meteor.Collection('questions');

Meteor.methods({
  // this is what the object should look like
  // obj = {
  //   questionListId: "hlkjklh", 
  //   question: "string",
  //   answers: null, [“strings”, “strings”, “strings”, “string”]
  //   answerType: “multiple”
  // }
  createQuestion: function (obj) {
    return Questions.insert(obj);
  }, //createQuestionsList
}); //methods


