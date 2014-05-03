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


}); //map