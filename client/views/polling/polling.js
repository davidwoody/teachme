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
// <<<<<<< HEAD

//   responsesYes: function(){
//     var questionId =  Router.current().params.questionId;
//     var responses = Responses.find({questionId: questionId}).fetch().length;
//     var yesResponses = Responses.find({questionId: questionId, response: "yes"}).fetch().length;
//     return yesResponses / responses ;
//   }, //responseYes

//   responsesNo: function(){
//     var questionId =  Router.current().params.questionId;
//     var responses = Responses.find({questionId: questionId}).fetch().length;
//     var noResponses = Responses.find({questionId: questionId, response: "no"}).fetch().length;
//     return noResponses / responses ;
//   }, //responseNo

yesPercent: function()
  {
    var questionId = Router.current().params.questionId;
    var allResponses = Responses.find({questionId: questionId}).count();
    var yesResponses = Responses.find({ questionId: questionId, response: 'yes' }).count();
    if (allResponses == 0)
    {
      return 0;
    }

    return Math.round((yesResponses / allResponses) * 100);
  },
  noPercent: function () {
    var questionId = Router.current().params.questionId;
    var allResponses = Responses.find({ questionId: questionId }).count();
    var noResponses = Responses.find({ questionId: questionId, response: 'no' }).count();
    if (allResponses == 0) {
      return 0;
    }

    return Math.round((noResponses / allResponses) * 100);
  },
  responseCount: function()
  {
    var questionId = Router.current().params.questionId;
    return Responses.find({ questionId: questionId }).count();
  }

});

Template.polling.events({
  'click #endPollingBtn': function(e){
    e.preventDefault();


  }, //
});