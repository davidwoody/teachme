Template.signUpIn.events({
  'submit #signUpIn': function (e) {
    e.preventDefault();

    var emailVal = $('#emailSignUp').val();
    var passwordVal = $('#passwordSignUp').val();
    var emailGroupEl = $('#emailGroup');
    var passwordGroupEl = $('#passwordGroup');

    if (!emailVal)
    {
        emailGroupEl.addClass('has-error')
    }
    else
    {
        emailGroupEl.removeClass('has-error');
    }

    if (!passwordVal) {
        passwordGroupEl.addClass('has-error')
    }
    else {
        passwordGroupEl.removeClass('has-error');
    }

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
          if(error){
            console.log(error);
            passwordGroupEl.addClass('has-error');
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