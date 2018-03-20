import {
    SIGNUP,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    DO_SIGNUP
  } from "../actionTypes/signup";
  
  export function signup() {
    //console.log(formData);
    return {
      type: SIGNUP
      //formData
    };
  }

  export function dosignup(users) {
    return {
      type: DO_SIGNUP,
      users
    };
  }

  export function signupSuccess(users) {
    console.log(users)
    return {
      type: SIGNUP_SUCCESS,
      users
    };
  }
  
  export function signupFailure(error) {
    return {
      type: SIGNUP_FAILURE,
      error
    };
  }