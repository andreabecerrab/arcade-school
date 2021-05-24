import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import InitialPage from "./pages/InitialPage";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
