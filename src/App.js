import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Game  from "./pages/Game";

function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route exact path="/" component={Game} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
