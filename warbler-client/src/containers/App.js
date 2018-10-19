import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { configureStore } from "../store";

const store = configureStore();

const App = props => {
  return (
    <Provider store={store}>
      <Router>
        <div className="onboarding">
          <h1>WARBLER-FRONTEND</h1>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
