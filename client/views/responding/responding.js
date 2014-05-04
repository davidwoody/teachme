function shuffleArray(array) {
    var currentIndex = array.length
      , temporaryValue
      , randomIndex
    ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

Template.responding.helpers({
    theQuestion: function () {
        var listNumber = parseInt(Router.current().params.listNumber, 10);
        var questionList = QuestionsList.find({ number: listNumber }).fetch();
        if (questionList && questionList.length > 0) {
            var questionId = questionList[0].currentQuestion;
            var question = Questions.find({ _id: questionId }).fetch();
            if (question && question.length > 0) {
                $('.add-response').prop('disabled', false);
                // $('.add-response').prop('disabled', false).removeClass('btn-primary').addClass('btn-default');

                // $("#answerYes").addClass('btn-success');
                // $("#answerNo").addClass('btn-danger');
                return question[0];
            }
        }
        return null;
    },
    // Quizy
    answerOptions: function () {

        var listNumber = parseInt(Router.current().params.listNumber, 10);
        var questionList = QuestionsList.find({ number: listNumber }).fetch();
        if (questionList && questionList.length > 0) {
            var questionId = questionList[0].currentQuestion;
            var question = Questions.find({ _id: questionId }).fetch();
            if (question && question.length > 0) {
                // $('.add-response').prop('disabled', false).removeClass('btn-default');
                // $("#answerYes").addClass('btn-success');
                // $("#answerNo").addClass('btn-danger');
                var answerOptionsArray = question[0].answerOptions;
                answerOptionsArray = shuffleArray(answerOptionsArray);
                var specialClassArray = ["btn-success", "btn-danger", "btn-warning", "btn-info"];
                var newArray = [];
                for (var i = 0; i < answerOptionsArray.length; i++) {

                    var obj = {
                        answerOption: answerOptionsArray[i],
                        specialClass: specialClassArray[i]
                    };

                    newArray.push(obj);
                };
                return newArray;
            }
        }
        // return null;
    },
    // answerIndex: function(){
    //   var answer = this;

    //   var listNumber = parseInt(Router.current().params.listNumber, 10);
    //   var questionList = QuestionsList.find({ number: listNumber }).fetch();
    //   if (questionList && questionList.length > 0) {
    //       var questionId = questionList[0].currentQuestion;
    //       var question = Questions.find({ _id: questionId }).fetch();
    //       if (question && question.length > 0) {
    //         // $('.add-response').prop('disabled', false).removeClass('btn-default');
    //         // $("#answerYes").addClass('btn-success');
    //         // $("#answerNo").addClass('btn-danger');
    //         var theIndex = question[0].answerOptions.indexOf(this);
    //         console.log(theIndex);
    //         return theIndex;
    //       }
    //   }
    //   // return null;

    // }, //
});

Template.responding.events({
    'click .add-response': function (e) {
        e.preventDefault();
        var button = $(e.target);
        var listNumber = parseInt(Router.current().params.listNumber, 10);
        var questionList = QuestionsList.findOne({ number: listNumber });
        if (questionList && questionList.currentQuestion) {
            Meteor.call('createResponse', questionList.currentQuestion, button.data('answer'));
        }
        $(button).removeClass("btn-default btn-danger btn-success btn-warning").addClass('btn-primary');
        $(".add-response").not(button).removeClass("btn-info btn-danger btn-success btn-warning").addClass('btn-default');
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