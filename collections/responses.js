Responses = new Meteor.Collection('responses');

Meteor.methods({
  // this is what the object should look like
  // obj = {
  //   questionId: "_id", 
  //   response: "string",
  // }
  createResponse: function (obj) {
    return Responses.insert(obj);
  }, //createQuestionsList
}); //methods
