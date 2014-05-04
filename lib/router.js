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

  }); //this.route

  this.route('dashboard', {
    path: '/dashboard',
    
  }); //this.route 

  this.route('list', {
    path: '/:number/list',
    data: function(){
      return QuestionsList.findOne({number: this.params.number});
    }, //data
    
  }); //this.route

  this.route('asking', {
    path: '/list-number/question-number/asking',
    
  }); //this.route

  this.route('polling', {
    path: '/list-number/question-number/polling',
    
  }); //this.route

  this.route('results', {
    path: '/list-number/question-number/results',
    
  }); //this.route



}); //map