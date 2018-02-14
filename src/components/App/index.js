import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HelpPage from 'containers/HelpPage';
import HomePage from 'containers/HomePage';
import PricingPage from 'containers/PricingPage';
import ContactPage from 'containers/ContactPage';
import BeginPage from 'containers/BeginPage';
import PrivacyPage from 'containers/PrivacyPage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/how-it-works" component={HelpPage} />
      <Route exact path="/pricing" component={PricingPage} />
      <Route exact path="/contact" component={ContactPage} />
      <Route exact path="/get-started" component={BeginPage} />
      <Route exact path="/privacy" component={PrivacyPage} />
    </Switch>
  );
}

export default App;
