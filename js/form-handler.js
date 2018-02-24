function capture(){
  event.preventDefault();
  
  var theEmail = document.signup.email.value
  
  console.log("Thanks for signing up " + theEmail + "!");
}