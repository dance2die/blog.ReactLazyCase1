import React, { lazy, Suspense, Component } from "react";
import ReactDOM from "react-dom";
import * as Events from "./components/events";
import shortid from "shortid";

import "./styles.css";

class App extends Component {
  render() {
    const { events } = this.props;
    const components = events.map(event => {
      const Component = Events[event] ? Events[event] : Events.NullEvent;
      return <Component key={shortid.generate()} />;
    });

    return (
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>{components}</Suspense>
      </div>
    );
  }
}

const events = [
  "PushEvent",
  "BadEvent",
  "PushEvent",
  "PushEvent",
  "ReleaseEvent",
  "StatusEvent",
  "BadEvent"
];

const rootElement = document.getElementById("root");
ReactDOM.render(<App events={events} />, rootElement);
