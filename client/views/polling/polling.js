Template.polling.helpers({
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