Template.list.helpers({
    number: function () {
        return Router.current().params.listNumber;
    },
    questions: function () {
        return Questions.find({ listNumber: Router.current().params.listNumber });
    },
    listName: function(){
        var listNumber = parseInt(Router.current().params.listNumber, 10);
        var list = QuestionsList.find({number: listNumber}).fetch();

        if(list && list.length > 0){
            return list[0].name;
        }
    }
});

Template.list.events({
    // 'click .add-question': function (e) {
    //     e.preventDefault();
    //     var button = $(e.target);
    //     var question = $('#questionInput').val();
    //     $('#questionInput').val("");
    //     var listNumber = Router.current().params.listNumber;
    //     Meteor.call('createQuestion', question, button.data('answer'), listNumber);
    // },

    'submit #addQuestionForm':function(e){
        e.preventDefault();
        var question = $('#questionInput').val();
        var answer1 =  $('#answer1').val();
        var answer2 =  $('#answer2').val();
        var answer3 =  $('#answer3').val();
        var answer4 =  $('#answer4').val();
        var listNumber = Router.current().params.listNumber;
        var theArray = [answer1, answer2, answer3, answer4];
        console.log(listNumber);
        console.log(theArray);
        Meteor.call('createQuestion', question, theArray, null, listNumber);
    }

}); //events