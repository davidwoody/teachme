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
    data: function(){
      return QuestionsList.findOne({number: this.params.listNumber});
    }, //data
    
  }); //this.route

  this.route('asking', {
    path: '/number/question/asking',
    
  }); //this.route

  this.route('polling', {
    path: '/number/question/polling',
    
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
    
  }); //this.route



}); //map