import { Route, Switch } from "react-router";
import Details from "./Details";
import About from "./About";
import Gallery from "./Gallery";
import creative from './resources/creative'
import work from './resources/work'
import Contact from "./Contact";


function Routes() {
  return (
    <Switch>
      <Route exact path="/work"><Gallery resources={work} type='work'/></Route>
      <Route path="/work/:id"><Details resources={work}/></Route>
      <Route exact path="/creative"><Gallery resources={creative} type='creative'/></Route>
      <Route path="/creative/:id"><Details resources={creative}/></Route>
      <Route exact path="/contact"><Contact/></Route>
      <Route exact path="/"><About /><Gallery resources={work} type='work' /></Route>
    </Switch>
  );
}

export default Routes;
