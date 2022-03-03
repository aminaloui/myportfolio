import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import Cv from './components/cv';
import Overmij from './components/overmij';
import Projecten from './components/projecten';
import { AnimatePresence } from 'framer-motion';
import { Route, NavLink, Link, Switch } from 'react-router-dom';
import LandingPage from './components/landingpage';




function App() {
  return (
    <div className="demo-big-content">
     
      <Layout>
        <Header className="header-color" title={<Link style={{  textDecoration: 'none', color: 'white', fontSize: '35px', fontFamily: 'Nunito ,sans-serif' }} to="/">Mijn Portfolio </Link>} scroll>
          <Navigation>
            <NavLink to="/cv" style={{ fontSize: '25px', fontFamily: 'Nunito ,sans-serif' }}>CV</NavLink>
            <NavLink to="/overmij" style={{ fontSize: '25px', fontFamily: 'Nunito ,sans-serif' }}>Over Mij</NavLink>
            <NavLink to="/projecten" style={{ fontSize: '25px', fontFamily: 'Nunito ,sans-serif' }}>Projecten</NavLink>
          </Navigation>
        </Header>
        
        <Drawer title={<Link style={{  textDecoration: 'none', color: 'black', fontFamily: 'Nunito ,sans-serif' }} to="/">Mijn Portfolio </Link>}>
          <Navigation>
            <NavLink to="/cv" style={{ fontSize: '20px', fontFamily: 'Nunito ,sans-serif' }}>CV</NavLink>
            <NavLink to="/overmij" style={{ fontSize: '20px', fontFamily: 'Nunito ,sans-serif' }}>Over Mij</NavLink>
            <NavLink to="/projecten" style={{ fontSize: '20px', fontFamily: 'Nunito ,sans-serif' }}>Projecten</NavLink>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main/>
          <AnimatePresence>
          <Switch location={Cv} key={Cv.key}>
              <Route path="/cv" component={Cv}/>
              <Route path="/overmij" component={Overmij} />
              <Route path="/projecten" component={Projecten} />
              <Route path="/" component={LandingPage} />
            </Switch>
          </AnimatePresence>
        </Content>
      </Layout>
    </div>

  );
}

export default App;
