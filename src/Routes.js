import { Redirect, Route, Switch } from "react-router";
import Home from "./Home";
import Pet from "./Pet";
import { useContext } from "react";
import PetContext from "./PetContext";

function Routes() {
  const { pet, pets } = useContext(PetContext);

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/dogs">
        {pet && <Pet />}
      </Route>
      <Route exact path="/cats">
        {pet && <Pet />}
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
