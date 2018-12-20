import * as React from "react";
import { Route, Switch } from "react-router-dom";

import LandingPage from "../Pages/LandingPage/LandingPage";

import CookiePolicy from "src/Pages/LandingPage/Policies/CookiePolicy/CookiePolicy";
import PrivacyPolicy from "src/Pages/LandingPage/Policies/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "src/Pages/LandingPage/Policies/TermsConditions/TermsConditions";

export default class DesktopRoutes extends React.Component {
  public render() {
    return (
      <Switch>
        <Route
          exact={true}
          path="/policy/privacy_policy"
          component={PrivacyPolicy}
        />
        <Route
          exact={true}
          path="/policy/terms_and_conditions"
          component={TermsConditions}
        />
        <Route
          exact={true}
          path="/policy/cookie_policy"
          component={CookiePolicy}
        />
        <Route path="/" component={LandingPage} />
      </Switch>
    );
  }
}
