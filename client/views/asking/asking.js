Template.asking.events({
  'click #startPolling': function (e) {
    e.preventDefault();
    console.log("click events");
    var listNumber = Router.current().params.listNumber;
    var questionId = Router.current().params.questionId;
    Meteor.call('updateCurrentQuestion', listNumber, questionId);
  }, //click

});