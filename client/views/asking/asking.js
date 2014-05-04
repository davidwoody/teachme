Template.asking.helpers({
  theQuestion: function(){
    var questionId = Router.current().params.questionId;
    // WHY CAN I NOT ACCESS THE PROPERIES RETURNED?
    // SOMETIMES WRONG
    return Questions.findOne({_id: questionId});
  },
  number: function(){
    return Router.current().params.listNumber;
  }
});

Template.asking.events({
  'click #startPolling': function (e) {
    e.preventDefault();
    console.log("click events");
    var listNumber = Router.current().params.listNumber;
    var questionId = Router.current().params.questionId;
    // Meteor.call('updateCurrentQuestion', listNumber, questionId);

    Router.go('polling', { listNumber: listNumber, questionId: questionId });
  }, //click

});