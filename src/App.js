import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import IfOffline from "./components/IfOffline";
import "./App.css";
import Dialogo from "./components/storyboard/dialogo1/Dialogo";
import Dialogo2 from "./components/storyboard/dialogo2/Dialogo2";
import Actividad from "./components/storyboard/actividad1/Actividad";
import Actividad2 from "./components/storyboard/activityTwo/actividad2";
import Achievement from "./components/storyboard/achievement/achievement";
import { createBrowserHistory } from "history";
import ReactGA from "react-ga";
import Badges from "./pages/Badges";
import Levels from "./pages/Levels";
import IndividualBadge from "./pages/IndividualBadge";
import CharacterIcon from "./pages/CharacterIcon";
import InitialPage from "./pages/InitialPage";

const history = createBrowserHistory();

ReactGA.initialize("UA-00000-01");
ReactGA.pageview(window.location.pathname + window.location.search);

history.listen(function (location) {
  ReactGA.pageview(window.location.pathname + window.location.search);
});

export default class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <main>
            <Route exact path="/" component={InitialPage} />
            <Header>
              {" "}
              <IfOffline> </IfOffline>
            </Header>
            <Route exact path="/app" component={Home} />
            <Route exact path="/level/:level" component={Levels} />
            <Route path="/level/activity/1" component={Actividad} />
            <Route path="/level/activity/2" component={Actividad2} />
            <Route path="/level/dialog/1" component={Dialogo} />
            <Route path="/level/dialog/2" component={Dialogo2} />
            <Route path="/level/achievement" component={Achievement} />
            <Route path="/badge00" component={IndividualBadge} />
            <Route path="/badges" component={Badges} />
            <Route path="/character" component={CharacterIcon} />
          </main>
        </div>
      </Router>
    );
  }
}
