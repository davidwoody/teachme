Template.dashboard.helpers({
  list: function(){
    return QuestionsList.find({userId: Meteor.userId()});
  }
});

Template.dashboard.events({
  'click #listNameSubmitBtn': function (e) {
    var name = $("#listNameInput").val();

    Meteor.call('createQuestionsList', name);

  }, //click
});