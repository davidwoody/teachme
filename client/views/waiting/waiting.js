Template.waiting.helpers({
    classNumber: function () {
        return Router.current().params.listNumber;
    }
});

Template.waiting.events({
    'click #ChangeGroupButton': function (e) {
     Router.go('/');
    }, //submit
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