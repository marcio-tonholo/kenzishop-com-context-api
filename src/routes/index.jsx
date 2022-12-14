import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home/index";
import Login from "../pages/Login/index";
import Cart from "../pages/Cart";
function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
    </Switch>
  );
}

export default Routes;
