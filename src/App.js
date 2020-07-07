import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className= "header-color" title={<Link style={{textDecoration: 'none', color: 'white', fontSize:'35px', fontFamily: 'Nunito ,sans-serif'}} to="/">Mijn Portfolio </Link>}scroll>
          <Navigation>
            <Link to="/cv" style={{fontSize: '25px',fontFamily: 'Nunito ,sans-serif'}}>CV</Link>
            <Link to="/overmij"style={{fontSize: '25px',fontFamily: 'Nunito ,sans-serif'}}>Over Mij</Link>
            <Link to="/projecten"style={{fontSize: '25px',fontFamily: 'Nunito ,sans-serif'}}>Projecten</Link>
            {/* <Link to="/contact"style={{fontSize: '20px'}}>Contact</Link> */}
          </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black', fontFamily: 'Nunito ,sans-serif'}} to="/">Mijn Portfolio </Link>}>
          <Navigation>
            <Link to="/cv" style={{fontSize: '20px', fontFamily: 'Nunito ,sans-serif'}}>CV</Link>
            <Link to="/overmij" style={{fontSize: '20px',fontFamily: 'Nunito ,sans-serif'}}>Over Mij</Link>
            <Link to="/projecten" style={{fontSize: '20px',fontFamily: 'Nunito ,sans-serif'}}>Projecten</Link>
            {/* <Link to="/contact">Contact</Link> */}
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
