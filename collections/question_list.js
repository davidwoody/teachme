QuestionsList = new Meteor.Collection('questionsList');

Meteor.methods({
  createQuestionsList: function (listName) {
    var num = QuestionsList.find().fetch().length;
    var numToUse = num + 1001;

    if(!num){
      numToUse = 1000;
    }

    var list = {
      name: listName,
      number: numToUse
    };

    return QuestionsList.insert(list);
  }, //createQuestionsList
}); //methods


