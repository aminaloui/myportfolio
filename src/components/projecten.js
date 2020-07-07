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
                <CardTitle style={{color: '#000', height: '176px', background: 'url(https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg) center / cover' }}></CardTitle>
                <CardText> Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw.</CardText>
                <CardActions border>
                <Button colored style={{width:"100%"}}>Github</Button>
            
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>

                </CardMenu>
                </Card>
                        {/*Project 2*/}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#000', height: '176px', background: 'url(https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg) center / cover' }}> </CardTitle>
                <CardText> Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw.</CardText>
                <CardActions border>
                <Button colored style={{width:"100%"}}>Github</Button>
         
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>

                </CardMenu>
                </Card>
                        {/*Project 3*/}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#000', height: '176px', background: 'url(https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg) center / cover' }}>  </CardTitle>
                <CardText> Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw.</CardText>
                <CardActions border>
                <Button colored style={{width:"100%"}}>Github</Button>
           
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>

                </CardMenu>
                </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h4>Coming Soon</h4></div>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div><h4>Coming Soon </h4></div>
            )
        }
    }
    toggleCategoriesMobile() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid-mobile">
                {/*Project 1*/}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    
                <CardTitle style={{color: '#000', height: '176px', background: 'url(https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg) center / cover' }}>  </CardTitle>
                <CardText> Mijn Portfolio heb ik gebouwd in Reactjs. Bekijk mijn project op Github</CardText>
                <CardActions border>
                
              
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>

                </CardMenu>
                </Card>
                        {/*Project 2*/}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#000', height: '176px', background: 'url(https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg) center / cover' }}>  </CardTitle>
                <CardText> Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw.</CardText>
                <CardActions border>
                <Button colored style={{width:"100%"}}>Github</Button>
                
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>

                </CardMenu>
                </Card>
                        {/*Project 3*/}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#000', height: '176px', background: 'url(https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg) center / cover' }}>  </CardTitle>
                <CardText> Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw.</CardText>
                <CardActions border>
                <Button colored style={{width:"100%"}}>Github</Button>
            
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>

                </CardMenu>
                </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h3>Comming soon</h3></div>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div><h3>Comming soon</h3></div>
            )
        }
    }



    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Html / Css/ ReactJS</Tab>
                    <Tab>Java</Tab>
                    <Tab>Python / Django</Tab>
                </Tabs>

               
                    <Grid>
                        <Cell col={12}hidePhone="true" hideTablet="true" >
                            <div className="content">{this.toggleCategories()} </div>

                        </Cell>

                    </Grid>

                    <Grid>
                        <Cell col={2} phone={6}  hideDesktop="true" hideTablet="true" >
                            <div className="content">{this.toggleCategoriesMobile()} </div>

                        </Cell>

                    </Grid>
                   
                    

            

            </div>
        )
    }
}



export default Projecten;