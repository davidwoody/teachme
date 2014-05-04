Template.question.helpers({
  aRoute: function () {
    var question = this;
    var listNumber = Router.current().params.listNumber;

    var questionId = question._id;

    return "/" + listNumber + "/" + questionId + "/asking";
  }
});