// ROUTER INFO GOES HERE

// DAVID WILL WRITE ROUTER CODE

// Configure Router
Router.configure({
  layoutTemplate: "layout",
  loadingTemplate: "loading"
});

// Show loading template before rendering route templates
Router.onBeforeAction('loading');

MobileDesktopController = RouteController.extend({
  onBeforeAction: function () {
    // TODO: write code to chech whether client is mobile or desktop
    
    
    // check if current route matches

    
    // if not, forward to correct route
    

    
  }
});


Router.map(function(){

  this.route('landing', {
    path: '/',

  }); //this.route 

  this.route('desktop', {
    path: '/desktop',

  }); //this.route

  this.route('dashboard', {
    path: '/dashboard',
    
  }); //this.route 

  this.route('list', {
    path: '/list-number/list',
    
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