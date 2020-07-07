import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';



class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6} >
                        <h2>Amin Aloui</h2>
                        <img src="/images/avatarcontact.jpg" alt="avatar" style={{ height: '250px' }} />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                        "Er is niemand die van pijn zelf houdt, die het zoekt en die het hebben wil, eenvoudigweg omdat het pijn is... Wat is Lorem Ipsum?
Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Neem contact met mij op</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                        (+316) 40665465
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