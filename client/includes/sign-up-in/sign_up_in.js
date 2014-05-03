Template.signUpIn.events({
  'submit #signUpIn': function (e) {
    e.preventDefault();

    var emailVal = $('#emailSignUp').val();
    var passwordVal = $('#passwordSignUp').val();


    // TODO: try to create user,
    // use callback function to sign in if user already exists
    // create user and sign in if user does not exist
    // Router.go to path after sign in/signup

    Accounts.createUser({
      email: emailVal,
      password: passwordVal,
    }, function (error) {
      // if error in signup try to sign in
      if(error){
        console.log(error);
        Meteor.loginWithPassword(emailVal, passwordVal, function (error) {
          if(err){
            console.log(error);
          } else{
            Router.go('dashboard');
          }
        });
      } else {
        // signup success, therefore go to dashboard route.
        Router.go('dashboard');
      }
    }); //createUser

    console.log("end of signupin event");

  }, //submit 

}); //events