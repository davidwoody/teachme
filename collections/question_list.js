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
      userId: this.userId,
      currentQuestion: null
    };

    return QuestionsList.insert(list);
  }, //createQuestionsList
}); //methods


if (Meteor.isClient) {
  Deps.autorun(function () {
    if (Router.current() && Router.current().params && Router.current().params.listNumber) {
      var questionList = QuestionsList.find({ number: parseInt(Router.current().params.listNumber) }).fetch();
      if (questionList && questionList.length > 0) {
        if (questionList[0].currentQuestion) {
          if (Router.current().path.indexOf('/waiting') > -1) {
            Router.go('responding', { listNumber: Router.current().params.listNumber });
          }
        }
        else {
          if (Router.current().path.indexOf('/responding') > -1) {
            Router.go('waiting', { listNumber: Router.current().params.listNumber });
          }
        }
      }
    }
  });
}