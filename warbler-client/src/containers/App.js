import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { configureStore } from "../store";
import { setTokenHeader } from "../services/auth";
import { setCurrentUser } from "../store/actions/auth";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./Navbar";
import Main from "./Main";

const store = configureStore();

if (localStorage.jwtToken) {
  setTokenHeader(localStorage.jwtToken);
  try {
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  } catch (err) {
    store.dispatch(setCurrentUser({}));
  }
}

const App = props => {
  return (
    <Provider store={store}>
      <Router>
        <CssBaseline>
          <div className="onboarding">
            <Navbar />
            <Main />
          </div>
        </CssBaseline>
      </Router>
    </Provider>
  );
};

export default App;
