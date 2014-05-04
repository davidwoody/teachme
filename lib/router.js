// ROUTER INFO GOES HERE

// DAVID WILL WRITE ROUTER CODE

// Configure Router
Router.configure({
  layoutTemplate: "layout",
  loadingTemplate: "loading"
});

// Show loading template before rendering route templates
Router.onBeforeAction('loading');

LoginController = RouteController.extend({
  onBeforeAction: function () {
    // write code to check login for teacher paths
    

    
  }
});

listContextController = RouteController.extend({
  // waitOn: function(){
  //   this.ready();
  // },
  data: function(){
      return QuestionsList.findOne({number: this.params.listNumber});
    }, //data
});


Router.map(function(){

  this.route('landing', {
    path: '/',

  }); //this.route 

  this.route('teacher', {
    path: '/teacher',
    onBeforeAction: function(){
      if(Meteor.user()){
        Router.go('dashboard');
      }
    },

  }); //this.route

  this.route('dashboard', {
    path: '/dashboard',
    
  }); //this.route 

  this.route('list', {
    path: '/:listNumber/list',
    controller: listContextController
    // data: function(){
    //   return QuestionsList.findOne({number: this.params.listNumber});
    // }, //data
    
  }); //this.route

  this.route('asking', {
    path: '/:listNumber/:questionId/asking',
    controller: listContextController

    
  }); //this.route

  this.route('polling', {
    path: '/:listNumber/:questionId/polling',
    
  }); //this.route

  this.route('results', {
    path: '/number/question/results',
    
  }); //this.route


// THESE ARE FOR THE AUDIENCE
  this.route('waiting', {
    path: '/:listNumber/waiting',
    
  }); //this.route

  this.route('responding', {
    path: '/:listNumber/responding',
    onAfterAction: function(){
      // debugger
      var addResponse = $(".add-response");
      for (var i = addResponse.length - 1; i >= 0; i--) {

        if(i === 0){
          addResponse[i].addClass("btn-success");
        }
        if(i === 1) {
          addResponse[i].addClass("btn-info");
        }
        if(i === 2){
         addResponse[i].addClass("btn-warning");
        }
        if(i === 3){
         addResponse[i].addClass("btn-danger");
        }
      }
    }
    
  }); //this.route



}); //map