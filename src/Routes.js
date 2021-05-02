import { Redirect, Route, Switch } from "react-router";
import Home from "./Home";
import Pet from "./Pet";
import { useContext } from "react";
import PetContext from "./PetContext";
import LoadingSpinner from "./LoadingSpinner";

function Routes() {
  const { pet } = useContext(PetContext);

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/dogs">{pet ? <Pet /> : <LoadingSpinner />}</Route>
      <Route path="/cats">{pet ? <Pet /> : <LoadingSpinner />}</Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
