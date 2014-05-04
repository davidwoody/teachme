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

  this.route('signOut', {
    path: '/sign-out',
    action: function(){
      Meteor.logout();
      Router.go('landing');
    }

  }); //this.route 

  this.route('presenter', {
      path: '/presenter',
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
    onAfterAction: function(){
      Session.set('currentRoomId', this.params.listNumber);
    }
  }); //this.route

  this.route('responding', {
    path: '/:listNumber/responding',
    onAfterAction: function(){
      Session.set('currentRoomId', this.params.listNumber);
    }
    
  }); //this.route



}); //map