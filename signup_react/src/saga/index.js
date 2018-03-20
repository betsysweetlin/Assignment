import {
    signupSuccess,
    signupFailure
  } from "../actionCreators/signup";
  import { put, takeLatest } from "redux-saga/effects";
  import {  SIGNUP, DO_SIGNUP} from "../actionTypes/signup";

  function* signup() {
    let url = "http://localhost:4000/products";
    try {
      let users = yield fetch("http://localhost:4000/products").then(r =>
        r.json()
      );
  
      yield put(signupSuccess(users));
    } catch (error) {
      yield put(signupFailure(error));
    }
  }
  
  function* dosignup(action) {
      console.log(action.users);
    try {
        let users = yield fetch("http://localhost:4000/products", {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(action.users)
        }).then(result => result.json());

        yield put(signupSuccess(users));
        console.log(users);
    }
    catch (error) {
        yield put(signupFailure(error));
    }
}
  
  export function* getProductsWatcher()  {
    yield [takeLatest(SIGNUP, signup),takeLatest(DO_SIGNUP, dosignup)];
}
  