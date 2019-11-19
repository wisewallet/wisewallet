/*
 * Functions for user info validation
 */

//Checks if email is valid
export function emailIsValid(email){
  return /\S+@\S+\.\S+/.test(email)
}

//Checks if username is valid
export function usernameIsValid(username){
  return /^[0-9a-zA-Z_.-]+$/.test(username);
}

//Checks if the signup is valid
export function validateSignup(form){
  var state = {
    error: false,
    errorMessage: "",
    success: false,
  }
  var userInfo = {
    email: form.email,
    username: form.username,
    first_name: form.first_name,
    last_name: form.last_name,
  }

  if(Object.values(userInfo).some(value => value == '')){
    state.error = true;
    state.errorMessage = "Please fill in all fields";
    return state
  }

  if(!emailIsValid(userInfo.email)){
    state.error = true;
    state.errorMessage = "Invalid Email";
    return state;
  }
  else if(!usernameIsValid(userInfo.username)){
    state.error = true;
    state.errorMessage = "Invalid username";
    return state;
  }
  else if(userInfo.first_name.trim() == "" || userInfo.last_name.trim() == ""){
    state.error = true;
    state.errorMessage = "Invalid Name";
    return state;
  }
  else{
    state.success = true;
    return state;
  }
}
