import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LandingPage from "./components/pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
