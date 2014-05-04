Template.dashboard.helpers({
    classNumber: function () {
        return Router.current();
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