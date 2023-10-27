import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// import { rootReducer } from "./reducers";
// import { createStore, compose } from "redux";
// import { applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// const composeEn = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducer, composeEn(applyMiddleware(thunk)));

import { store } from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


