import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Step1 from "./components/Step1/Step1";
import Step2 from "./components/Step2/Step2";
import Step3 from "./components/Step3/Step3";
import Result from "./components/Result/Result";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Step1} />
          <Route exact path="/step2" component={Step2} />
          <Route exact path="/step3" component={Step3} />
          <Route exact path="/result" component={Result} />

          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
