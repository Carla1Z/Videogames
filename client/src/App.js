import "./App.css";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./view/LandingPage";
import Home from "./view/Home";
import Form from "./view/Form";
import Detail from "./view/Detail";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={Home} />
        <Route path="/form" component={Form} />
        <Route path="/detail" component={Detail} />
      </Switch>
    </div>
  );
}

export default App;
