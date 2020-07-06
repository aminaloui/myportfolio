import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './landingpage';
import Contact from './contact';
import Cv from './cv';
import OverMij from './overmij';
import Projecten from './projecten';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/overmij" component={OverMij} />
        <Route path="/contact" component={Contact} />
        <Route path="/projecten" component={Projecten} />
        <Route path="/cv" component={Cv} />
        
    </Switch>

)

export default Main;
