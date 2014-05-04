Template.navbar.helpers({
  isUser: function () {
    if(Meteor.user()){
      return true;
    } else {
      return false;
    }
  }
});