import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';


class Projecten extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                {/*Project 1*/}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#000', height: '176px', background: 'url() center / cover' }}> React Project #1 </CardTitle>
                <CardText> Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw.</CardText>
                <CardActions border>
                <Button colored>Github</Button>
                <Button colored>Code</Button>
                <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>

                </CardMenu>
                </Card>
                        {/*Project 2*/}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#000', height: '176px', background: 'url() center / cover' }}> React Project #2 </CardTitle>
                <CardText> Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw.</CardText>
                <CardActions border>
                <Button colored>Github</Button>
                <Button colored>Code</Button>
                <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>

                </CardMenu>
                </Card>
                        {/*Project 3*/}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#000', height: '176px', background: 'url() center / cover' }}> React Project #3 </CardTitle>
                <CardText> Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw.</CardText>
                <CardActions border>
                <Button colored>Github</Button>
                <Button colored>Code</Button>
                <Button colored>Live Demo</Button>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>

                </CardMenu>
                </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h1>This is Java</h1></div>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div><h1>This is Python</h1></div>
            )
        }
    }



    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Java</Tab>
                    <Tab>Python</Tab>
                </Tabs>

               
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()} </div>

                        </Cell>

                    </Grid>
                    

            

            </div>
        )
    }
}



export default Projecten;