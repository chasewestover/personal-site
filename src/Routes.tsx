import { Route, Switch, Redirect } from "react-router";
import Details from "./Details";
import About from "./About";
import MasonryGallery from "./GalleryMasonry";
import creative from "./resources/creative";
import Contact from "./Contact";

function Routes() {
    return (
        <Switch>
            <Route exact path="/creative">
                <Redirect to="/" />
            </Route>
            <Route path="/creative/:id">
                <Details resources={creative} />
            </Route>
            <Route exact path="/contact">
                <Contact />
            </Route>
            <Route exact path="/">
                <About />
                <MasonryGallery resources={creative} type="creative" />
            </Route>
        </Switch>
    );
}

export default Routes;
