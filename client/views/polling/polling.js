Template.polling.helpers({
    theQuestion: function () {
        var questionId = Router.current().params.questionId;
        // WHY CAN I NOT ACCESS THE PROPERIES RETURNED?
        // SOMETIMES WRONG
        return Questions.findOne({ _id: questionId });
    },

    number: function () {
        return Router.current().params.listNumber;
    },

    answerOptions: function () {
        var newArray = [];
        var questionId = Router.current().params.questionId;
        var theQuestion = Questions.findOne({ _id: questionId });
        if (theQuestion == null) {
            return null;
        }

        var options = theQuestion.answerOptions;
        var allResponsesCount = Responses.find({ questionId: questionId }).count();

        for (var i = 0; i < options.length; i++) {
            var optionResponses = Responses.find({ questionId: questionId, response: options[i] }).count();

            var percent;
            if (allResponsesCount === 0) {
                percent = 0;
            }
            else {
                percent = Math.round((optionResponses / allResponsesCount) * 100);
            }

            var optionObject = {
                index: i,
                responsePercent: percent,
                answerText: options[i]
            };

            newArray.push(optionObject);
        }

        return newArray;
    },

    responseCount: function () {
        var questionId = Router.current().params.questionId;
        return Responses.find({ questionId: questionId }).count();
    },

    userCount: function(){
        var precArray = Presences.find().fetch();
        var count = 0;

        for (var i = 0; i < precArray.length; i++) {
            if(precArray[i].state.classNumber === Router.current().params.listNumber){
                count++;
            }
        };

        return count;
    }

});

Template.polling.events({
    'click #endPollingBtn': function (e) {
        e.preventDefault();

        var listNumber = Router.current().params.listNumber;
        Meteor.call('updateCurrentQuestion', listNumber, null);

        Router.go('list', { listNumber: listNumber });
    }, //
});