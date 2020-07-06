import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className= "header-color" title={<Link style={{textDecoration: 'none', color: 'white', fontSize:'30px'}} to="/">Mijn Portfolio </Link>}scroll>
          <Navigation>
            <Link to="/cv" style={{fontSize: '20px'}}>CV</Link>
            <Link to="/overmij"style={{fontSize: '20px'}}>Over Mij</Link>
            <Link to="/projecten"style={{fontSize: '20px'}}>Projecten</Link>
            <Link to="/contact"style={{fontSize: '20px'}}>Contact</Link>
          </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Mijn Portfolio </Link>}>
          <Navigation>
            <Link to="/cv">CV</Link>
            <Link to="/overmij">Over Mij</Link>
            <Link to="/projecten">Projecten</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
