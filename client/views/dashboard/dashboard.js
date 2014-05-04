Template.dashboard.helpers({
  list: function(){
    return QuestionsList.find({userId: Meteor.userId()});
  }
});

Template.dashboard.events({
    'submit #createNewList': function (e) {
        e.preventDefault();
    var name = $("#listNameInput").val();

    Meteor.call('createQuestionsList', name);

  }, //click
});