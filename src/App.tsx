import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/test" component={Test} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
