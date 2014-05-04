Responses = new Meteor.Collection('responses');

Meteor.methods({
  // this is what the object should look like
  // obj = {
  //   questionId: "_id", 
  //   response: "yes/no",
  // }
  createResponse: function () {
    return Responses.insert(obj);
  }, //createQuestionsList
}); //methods
