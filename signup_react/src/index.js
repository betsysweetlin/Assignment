import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import signupReducer from "./reducers/signup";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { getProductsWatcher } from "./saga";
import { createLogger } from "redux-logger";

let sagaMiddleware = createSagaMiddleware();
const store = createStore(
  signupReducer,
  applyMiddleware(sagaMiddleware, createLogger())
);
sagaMiddleware.run(getProductsWatcher);
store.subscribe(()=>{
  console.log("store updated",store.getState());
  })
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
