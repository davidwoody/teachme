Template.responding.helpers({
    theQuestion: function () {
        var listNumber = Router.current().params.listNumber;
        var questionList = QuestionsList.find({ listNumber: listNumber }).fetch();
        if (questionList && questionList.length > 0) {
            var questionId = questionList[0].currentQuestion;
            var question = Questions.find({ _id: questionId }).fetch();
            if (question && question.length > 0) {
                return question[0];
            }
        }

        return null;
    }
});

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