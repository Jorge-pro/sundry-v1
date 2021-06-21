import React from 'react';
import PagesPromotionSearch from "./pages/PagesPromotion/Search/Search";
import PagesPromotionForm from "./pages/PagesPromotion/Form/Form";
import Navbar from "./Components/Navbar/Navbar"
import { FooterContainer } from './Components/Footer/footer';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const App = () => {
  return (
    
    <Router>
      <Navbar />
      <Switch>
        <Route path="/edit/:id" component={PagesPromotionForm}/>
        <Route path="/create" component={PagesPromotionForm}/>
        <Route path="/work" component={PagesPromotionSearch}/>
        <Route path="/contact" component={PagesPromotionSearch}/>
        <Route path="/" component={PagesPromotionSearch}/>

      </Switch>
      <FooterContainer />
    </Router>
    
  );
}

export default App;
