Responses = new Meteor.Collection('responses');

Meteor.methods({
  // this is what the object should look like
  // obj = {
  //   questionId: "_id", 
  //   response: "sting",
  // }

  createResponse: function (questionId, response) {
    var responseObj = {};

    responseObj.questionId = questionId;
    responseObj.response = response;

    return Responses.insert(responseObj);

  }, //createQuestionsList
}); //methods
