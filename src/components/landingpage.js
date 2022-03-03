import React, { Component } from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { Helmet } from 'react-helmet';
import {Grid} from '@mui/material';

class LandingPage extends Component {
    constructor(props) {
        super(props)
        this.state = { title: " Amin Aloui ", description: "Mijn Portfolio" };
    }

    render() {
        return (
         
            <div style={{ width: '100%', margin: 'auto' }}>
                
                <Grid className="landing-grid">
                  
                        <img src="/images/avatar3.png" alt="avatar" className="avatar-img moveUpDown"/>
                        <div className="banner-text-desktop moveUpDown">
                            <h1>
                               
                            <Typewriter
                            loop
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={150}
                            delaySpeed={1000}
                            words={[' Front-end Developer', ' Software Developer', ' App Developer']}
                            />
                            </h1>
                            <hr/>
                            <p>HTML | CSS | JavaScript | React.js | Java | Python</p>

                            <div className="social-links-desktop">

                                {/*Linkedin*/}
                                <a href="https://www.linkedin.com/in/amin-a-1b3316152/" target="_blank" rel="noopener noreferrer" className="zoom-box">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                {/*Github*/}
                                <a href="https://github.com/aminaloui" target="_blank" rel="noopener noreferrer" className="zoom-box">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                {/*Email*/}
                                <a href="mailto:aminaloui1@gmail.com" target="_blank" rel="noopener noreferrer" className="zoom-box">
                                    <i className="fa fa-envelope-square" aria-hidden="true" />
                                </a>

                            </div>
                            <Helmet>
                                <title>{this.state.title}</title>
                                <meta name="description"
                                    content={this.state.description} />
                            </Helmet>
                        </div>


                   


                </Grid>


            </div>


        )
    }
}



export default LandingPage;