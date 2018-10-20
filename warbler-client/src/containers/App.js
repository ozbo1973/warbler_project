import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { configureStore } from "../store";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./Navbar";
import Main from "./Main";

const store = configureStore();

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
