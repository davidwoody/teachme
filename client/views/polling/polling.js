Template.polling.helpers({
  theQuestion: function(){
    var questionId = Router.current().params.questionId;
    // WHY CAN I NOT ACCESS THE PROPERIES RETURNED?
    // SOMETIMES WRONG
    return Questions.findOne({_id: questionId});
  },
  number: function(){
    return Router.current().params.listNumber;
  },

  responsesYes: function(){
    var questionId =  Router.current().params.questionId;
    var responses = Responses.find({questionId: questionId}).fetch().length;
    var yesResponses = Responses.find({questionId: questionId, response: "yes"}).fetch().length;
    return yesResponses / responses ;
  }, //responseYes

  responsesNo: function(){
    var questionId =  Router.current().params.questionId;
    var responses = Responses.find({questionId: questionId}).fetch().length;
    var noResponses = Responses.find({questionId: questionId, response: "no"}).fetch().length;
    return noResponses / responses ;
  }, //responseNo

});

Template.polling.events({
  'click #endPollingBtn': function(e){
    e.preventDefault();


  }, //
});