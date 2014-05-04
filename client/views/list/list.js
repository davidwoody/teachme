Template.list.helpers({
    number: function () {
        return Router.current().params.listNumber;
    },
    questions: function () {
        return Questions.find({ listNumber: Router.current().params.listNumber });
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