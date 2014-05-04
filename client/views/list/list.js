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
    'click .add-question': function (e) {
        e.preventDefault();
        var button = $(e.target);
        var question = $('#questionInput').val();
        $('#questionInput').val("");
        var listNumber = Router.current().params.listNumber;
        Meteor.call('createQuestion', question, button.data('answer'), listNumber);
    }
}); //events