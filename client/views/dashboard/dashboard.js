Template.dashboard.helpers({
    list: function () {
        return QuestionsList.find({ userId: Meteor.userId() });
    }
});

Template.dashboard.events({
    'submit #createNewList': function (e) {
        e.preventDefault();
        var inputField = $("#listNameInput");
        var name = inputField.val();

        Meteor.call('createQuestionsList', name);
        inputField.val("");

    }, //click
});