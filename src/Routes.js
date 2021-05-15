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
      <Route exact path="/personal-site/work"><GalleryScroll resources={work}/></Route>
      <Route path="/personal-site/work/:id"><Details resources={work}/></Route>
      <Route exact path="/personal-site/creative"><MasonryGallery resources={creative} type='creative'/></Route>
      <Route path="/personal-site/creative/:id"><Details resources={creative}/></Route>
      <Route exact path="/personal-site/contact"><Contact/></Route>
      <Route exact path="/personal-site/"><About /><GalleryScroll resources={work} type='work' /></Route>
    </Switch>
  );
}

export default Routes;
