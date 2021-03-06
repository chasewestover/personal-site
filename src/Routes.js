import { Route, Switch } from "react-router";
import Details from "./Details";
import About from "./About";
import MasonryGallery from "./GalleryMasonry";
import creative from './resources/creative'
import work from './resources/work'
import Contact from "./Contact";
import React from "react";
import GalleryScroll from "./GalleryScroll";


function Routes() {
  return (
    
    <Switch>
      <Route path="/projects/:id"><Details resources={work}/></Route>
      <Route exact path="/creative"><MasonryGallery resources={creative} type='creative'/></Route>
      <Route path="/creative/:id"><Details resources={creative}/></Route>
      <Route exact path="/contact"><Contact/></Route>
      <Route exact path="/"><About /><GalleryScroll resources={work}/></Route>
    </Switch>
  );
}

export default Routes;
