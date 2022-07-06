import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Services from "./pages/Services.js";
import Products from "./pages/Products.js";
import SignUp from "./pages/SignUp.js";
import Navbar from "./components/Navbar.js";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/react-generic-website/" exact component={Home} />
          <Route path="/react-generic-website/services/" component={Services} />
          <Route path="/react-generic-website/products/" component={Products} />
          <Route path="/react-generic-website/sign-up/" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
