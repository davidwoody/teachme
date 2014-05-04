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

//$(function () {
//  if (Meteor.isClient) {
//    var questionListQuery = QuestionsList.find({ number: Router.current().params.listNumber });
//    var handle = query.observeChanges({
//      change: function (id, fields) {
//        debugger;
//      }
//    });
//  }
//});