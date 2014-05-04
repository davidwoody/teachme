Template.list.helpers({
  number: function () {
    return Router.current().params.listNumber;
  },
  questions: function(){
    return Questions.find({listNumber: Router.current().params.listNumber});
  }
});

Template.list.events({

}); //events