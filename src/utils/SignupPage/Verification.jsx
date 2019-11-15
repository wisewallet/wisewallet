/*
 * Functions for user info validation
 */

//Checks if email is valid
export function emailIsValid(email) {
  return /\S+@\S+\.\S+/.test(email)
}

//Checks if username is valid
export function usernameIsValid(username) {
  return /^[0-9a-zA-Z_.-]+$/.test(username);
}

//Checks if the signup is valid
export function validateSignup(form) {
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

  if (Object.values(userInfo).some(value => value === '')) {
    state.error = true;
    state.errorMessage = "Please fill in all fields";
    return state
  }

  if (!emailIsValid(userInfo.email)) {
    state.error = true;
    state.errorMessage = "Invalid Email";
    return state;
  }
  else if (!usernameIsValid(userInfo.username)) {
    state.error = true;
    state.errorMessage = "Invalid username";
    return state;
  }
  else if (userInfo.first_name.trim() === "" || userInfo.last_name.trim() === "") {
    state.error = true;
    state.errorMessage = "Invalid Name";
    return state;
  }
  else {
    state.success = true;
    return state;
  }
}


//Checks if the company signup is valid
export function validateCompanySignup(form) {
  var state = {
    error: false,
    errorMessage: "",
    success: false,
  }
  var companyInfo = {
    email: form.email,
    company_name: form.company_name,
    address_line_1: form.address_line_1,
    city: form.city,
    state: form.state,
    country: form.country,
    link: form.link

  }

  if (Object.values(companyInfo).some(value => value === '')) {
    state.error = true;
    state.errorMessage = "Please fill in all fields";
    return state
  }

  if (!emailIsValid(companyInfo.email)) {
    state.error = true;
    state.errorMessage = "Invalid Email";
    return state;
  }
  else if (
    companyInfo.company_name.trim() === "" ||
    companyInfo.address_line_1.trim() === "" ||
    companyInfo.link.trim() === "" ||
    companyInfo.city.trim() === "" ||
    companyInfo.state.trim() === "" ||
    companyInfo.country.trim() === ""
    ) {
    state.error = true;
    state.errorMessage = "Please fill all the details";
    return state;
  }
  else {
    state.success = true;
    return state;
  }
}