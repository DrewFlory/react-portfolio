import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './Components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white', fontFamily: 'BenchNine', fontSize: '30px'}} to="/">My Portfolio</Link>} scroll>
            <Navigation>
                <Link to="/resume" style= {{fontFamily: 'Didact Gothic', fontSize: '20px'}}>Resume</Link>
                <Link to="/aboutme" style= {{fontFamily: 'Didact Gothic', fontSize: '20px'}}>About Me</Link>
                <Link to="/projects" style= {{fontFamily: 'Didact Gothic', fontSize: '20px'}}>Projects</Link>
                <Link to="/contact" style= {{fontFamily: 'Didact Gothic', fontSize: '20px'}}>Contact</Link>
            </Navigation>
        </Header>
            <Drawer title={<Link style={{ fontFamily: 'Didact Gothic', textDecoration: 'none', color: 'black', backgroundSize: '100%', scroll: 'none'}} to="/"><span>My Portfolio</span></Link>}>
                <Navigation>
                  <Link to="/resume" style = {{ fontFamily: 'Didact Gothic', fontSize: '18px', color: 'black'}}>Resume</Link>
                  <Link to="/aboutme" style = {{ fontFamily: 'Didact Gothic', fontSize: '18px', color: 'black'}}>About Me</Link>
                  <Link to="/projects" style = {{ fontFamily: 'Didact Gothic', fontSize: '18px', color: 'black'}}>Projects</Link>
                  <Link to="/contact" style = {{ fontFamily: 'Didact Gothic', fontSize: '18px', color: 'black'}}>Contact</Link>
                </Navigation>
            </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
