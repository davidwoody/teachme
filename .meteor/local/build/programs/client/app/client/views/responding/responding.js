(function(){Template.responding.helpers({
  theQuestion: function () {
      var listNumber = parseInt(Router.current().params.listNumber, 10);
      var questionList = QuestionsList.find({ number: listNumber }).fetch();
      if (questionList && questionList.length > 0) {
          var questionId = questionList[0].currentQuestion;
          var question = Questions.find({ _id: questionId }).fetch();
          if (question && question.length > 0) {
            $('.add-response').prop('disabled', false).removeClass('btn-default');
            $("#answerYes").addClass('btn-success');
            $("#answerNo").addClass('btn-danger');
            return question[0];
          }
      }
      return null;
    }
});

Template.responding.events({
  'click .add-response': function (e) {
    e.preventDefault();
    var button = $(e.target);
    var listNumber = parseInt(Router.current().params.listNumber);
    var questionList = QuestionsList.findOne({ number: listNumber });
    if (questionList && questionList.currentQuestion)
    {
      Meteor.call('createResponse', questionList.currentQuestion, button.data('answer'));
    }
    $(".add-response").not(button).removeClass("btn-success").removeClass("btn-danger").addClass('btn-default');
    $('.add-response').prop('disabled', true);
  }
}); //events

//Template.landing.events({
//    'submit #joinListForm': function (e) {
//        e.preventDefault();
//        var numberVal = $("#joinListInput").val();
//        Router.go("waiting", { listNumber: numberVal })
//        //var inputField = $("#listNameInput");
//        //var name = inputField.val();

//        //Meteor.call('createQuestionsList', name);
//        //inputField.val("");
//    }, //submit
//});

})();
