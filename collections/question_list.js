QuestionsList = new Meteor.Collection('questionsList');

Meteor.methods({
  createQuestionsList: function (listName) {
    var num = QuestionsList.findOne({}, { sort: { number: -1 } });
    var numToUse = 1001; // default value if there are no questions

    if (num)
    {
      numToUse = num.number + 1;
    }

    var list = {
      name: listName,
      number: numToUse,
      userId: this.userId
    };

    return QuestionsList.insert(list);
  }, //createQuestionsList
}); //methods


