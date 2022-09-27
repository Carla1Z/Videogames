import { Switch, Route } from "react-router-dom";
import LandingPage from "./view/LandingPage";
import Home from "./view/Home";
import Form from "./view/Form";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={Home} />
        <Route path="/form" component={Form} />
      </Switch>
    </div>
  );
}

export default App;
