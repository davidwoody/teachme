//Template.dashboard.helpers({
//    list: function () {
//        return QuestionsList.find({ userId: Meteor.userId() });
//    }
//});

Template.landing.events({
    'submit #joinListForm': function (e) {
        e.preventDefault();
        var numberVal = $("#joinListInput").val();
        Router.go("waiting", {listNumber: numberVal})
        //var inputField = $("#listNameInput");
        //var name = inputField.val();

        //Meteor.call('createQuestionsList', name);
        //inputField.val("");
    }, //submit
});

Presence.state = function() {
  return {
    online: true,
    classNumber: Router.current().params && Router.current().params.listNumber
  };
};