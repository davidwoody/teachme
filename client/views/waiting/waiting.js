Template.waiting.helpers({
    classNumber: function () {
        return Router.current().params.listNumber;
    }
});

//Template.dashboard.events({
//    'submit #createNewList': function (e) {
//        e.preventDefault();
//        var inputField = $("#listNameInput");
//        var name = inputField.val();

//        Meteor.call('createQuestionsList', name);
//        inputField.val("");
//    }, //submit
//});