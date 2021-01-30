import React from "react";
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";

import routes from "./routes";
import withTracker from "./withTracker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles.css";

import UserProvider from "./firebase/UserProvider";

export default () => (
  <UserProvider>
  <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <div>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={withTracker(props => {
              if (route.layout) {
                return (
                  <route.layout {...props}>
                    <route.component {...props} />
                  </route.layout>
                );
              } else {
                return (
                  <route.component {...props} />
                );
              }
            })}
          />
        );
      })}
    </div>
  </Router>
  </UserProvider>
);
