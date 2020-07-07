import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';



class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6} >
                    <img src="/images/avatarcontact.jpg" alt="avatar" style={{ height: '400px' , width: '600px'}} />
                        <h2>Amin Aloui</h2>
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
Mijn interesse in programmeren is voor mij begonnen tijdens mijn tussenjaar. Ik had toen veel vrije tijd waarin ik mezelf heb aangeleerd te werken met HTML en CSS. Door middel van verschillende online cursussen en oefenopdrachten ben ik erachter gekomen dat ik hier nog veel meer over wil leren en een carrière van wil maken en heb ik me daarom aangemeld voor de opleiding ICT Software development. Tijdens mijn huidige opleiding bij YoungCapital Next heb ik leren werken met Python, Java, Javascript , Html en css . Mijn streefdoel is om zo veel
mogelijk ervaring op programmeergebied te kunnen opdoen.</p>
                    </Cell>
                    
                    <Cell col={6}>
                        <h2>Neem contact met mij op</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                        (+316) 40******
                                        </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>

                                        <i className="fa fa-linkedin" aria-hidden="true" />
                                        <a href="https://www.linkedin.com/in/amin-a-1b3316152/" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>linkedin.com/in/amin-a-1b3316152/</a>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        Theaminaloui@hotmail.com
                                        </ListItemContent>
                                </ListItem>

                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}



export default Contact;