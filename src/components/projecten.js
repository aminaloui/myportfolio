import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardText } from 'react-mdl';


class Projecten extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }
/* Desktop */
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                {/*Web*/}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#000', height: '176px', background: 'url(https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg) center / cover' }}></CardTitle>
                 
                <CardText><h4>Mijn Portfolio</h4>
                <p>Mijn Portfolio heb ik in ReactJs geschreven. Bekijk het project op github via de button onder deze tekst.</p></CardText>
                <CardActions border>
                <Button colored style={{width:"100%"}}><a href="https://github.com/aminaloui/myportfolio">Github</a></Button>
                </CardActions>
            
                </Card>
                        
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#000', height: '176px', background: 'url(https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg) center / cover' }}> </CardTitle>
                <CardText><h4>Boodschappenlijst</h4>
                <p>In de applicatie meld je je via je google account aan en kun je een boodschappenlijstje opzetten. De objecten worden opgeslagen in een firebase database. </p></CardText>
                <CardActions border>
                
                </CardActions>
                
                </Card>
                    
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (

                
                <div>{/*Java*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#000', height: '176px', background: 'url(https://www.biernet.nl/images/brouwerij/55296-Bavaria%20logo.jpg) center / cover' }}></CardTitle>
                 
                <CardText><h4>Bavaria Cashback</h4>
                <p>Tijdens mijn werkzaamheden bij Acorel Commerce in Alkmaar, heb ik met trots mee mogen werken aan het actieplatform van Bavria. Deze web-app is gebouwd in Java.</p></CardText>
                <CardActions border>
                <Button colored style={{width:"100%"}} ><a href="https://cashback.bavaria.com">Website</a></Button>
                </CardActions>
            
                </Card></div>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div>{/*Python*/}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#000', height: '176px', background: 'url(https://indigo.amsterdam/wp-content/uploads/2017/05/python-django-logo-1024x576.jpg) center / cover' }}></CardTitle>
                 
                <CardText><h4>Foodify</h4>
                <p>Foodify is een schoolproject gebouwd voor het vak Praktijkvaardigheden 2. Deze applicatie is gebouwd zodat mensen die te veel hebben gekookt en mensen die niet hebben gekookt elkaar tegemoetkomen. Het doel is om voedselverspilling te voorkomen.</p></CardText>
                <CardActions border>
                <Button colored style={{width:"100%"}} ><a href="https://github.com/aminaloui/Foodify-Praktijk-2-">Github</a></Button>
                </CardActions>
            
                </Card></div>
            )
        }
    }

    /* Mobile */
    toggleCategoriesMobile() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid-mobile">
                {/*Web*/}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#000', height: '176px', background: 'url(https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg) center / cover' }}></CardTitle>
                 
                <CardText><h4>Mijn Portfolio</h4>
                <p>Mijn Portfolio heb ik in ReactJs geschreven. Bekijk het project op github via de button onder deze tekst.</p></CardText>
                <CardActions border>
                <Button colored style={{width:"100%"}} ><a href="https://github.com/aminaloui/myportfolio">Github</a></Button>
                </CardActions>
            
                </Card>
                     
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#000', height: '176px', background: 'url(https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg) center / cover' }}> </CardTitle>
                <CardText><h4>Boodschappenlijst</h4>
                <p>In de applicatie meld je je via je google account aan en kun je een boodschappenlijstje opzetten. De objecten worden opgeslagen in een firebase database. </p></CardText>
                <CardActions border>
                
                </CardActions>
                
       </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div>
                    {/*Java*/}
 <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#000', height: '176px', background: 'url(https://www.biernet.nl/images/brouwerij/55296-Bavaria%20logo.jpg) center / cover' }}></CardTitle>
                 
                <CardText><h4>Bavaria Cashback</h4>
                <p>Tijdens mijn werkzaamheden bij Acorel Commerce in Alkmaar, heb ik met trots mee mogen werken aan het actieplatform van Bavria. Deze web-app is gebouwd in Java.</p></CardText>
                <CardActions border>
                <Button colored style={{width:"100%"}} ><a href="https://cashback.bavaria.com">Website</a></Button>
                </CardActions>
            
                </Card>
                    
                </div>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div>
                    {/*Python 1*/}
           <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#000', height: '176px', background: 'url(https://indigo.amsterdam/wp-content/uploads/2017/05/python-django-logo-1024x576.jpg) center / cover' }}></CardTitle>
                 
                <CardText><h4>Foodify</h4>
                <p>Foodify is een schoolproject gebouwd voor het vak Praktijkvaardigheden 2. Deze applicatie is gebouwd zodat mensen die te veel hebben gekookt en mensen die niet hebben gekookt elkaar tegemoetkomen. Het doel is om voedselverspilling te voorkomen.</p></CardText>
                <CardActions border>
                <Button colored style={{width:"100%"}} ><a href="https://github.com/aminaloui/Foodify-Praktijk-2-">Github</a></Button>
                </CardActions>
            
                </Card>

                </div>
            )
        }
        

        
    }
/* Tablet */
    toggleCategoriesTablet() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid-tablet">
                {/*Project 1*/}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#000', height: '176px', background: 'url(https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg) center / cover' }}></CardTitle>
                 
                <CardText><h4>Mijn Portfolio</h4>
                <p>Mijn Portfolio heb ik in ReactJs geschreven. Bekijk het project op github via de button onder deze tekst.</p></CardText>
                <CardActions border>
                <Button colored style={{width:"100%"}} ><a href="https://github.com/aminaloui/myportfolio">Github</a></Button>
                </CardActions>
            
                </Card>
                        {/*Project 2*/}
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#000', height: '176px', background: 'url(https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg) center / cover' }}> </CardTitle>
                <CardText><h4>Boodschappenlijst</h4>
                <p>In de applicatie meld je je via je google account aan en kun je een boodschappenlijstje opzetten. De objecten worden opgeslagen in een firebase database. </p></CardText>
                <CardActions border>
                
                </CardActions>
                
       </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div>
<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#000', height: '176px', background: 'url(https://www.biernet.nl/images/brouwerij/55296-Bavaria%20logo.jpg) center / cover' }}></CardTitle>
                 
                <CardText><h4>Bavaria Cashback</h4>
                <p>Tijdens mijn werkzaamheden bij Acorel Commerce in Alkmaar, heb ik met trots mee mogen werken aan het actieplatform van Bavria. Deze web-app is gebouwd in Java.</p></CardText>
                <CardActions border>
                <Button colored style={{width:"100%"}} ><a href="https://cashback.bavaria.com">Website</a></Button>
                </CardActions>
            
                </Card>
                    
                </div>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div>
           <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#000', height: '176px', background: 'url(https://indigo.amsterdam/wp-content/uploads/2017/05/python-django-logo-1024x576.jpg) center / cover' }}></CardTitle>
                 
                <CardText><h4>Foodify</h4>
                <p>Foodify is een schoolproject gebouwd voor het vak Praktijkvaardigheden 2. Deze applicatie is gebouwd zodat mensen die te veel hebben gekookt en mensen die niet hebben gekookt elkaar tegemoetkomen. Het doel is om voedselverspilling te voorkomen.</p></CardText>
                <CardActions border>
                <Button colored style={{width:"100%"}} ><a href="https://github.com/aminaloui/Foodify-Praktijk-2-">Github</a></Button>
                </CardActions>
            
                </Card>

                </div>
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
                    <Grid>
                        <Cell col={6} tablet={8}  hideDesktop="true" hidePhone="true" >
                            <div className="content">{this.toggleCategoriesTablet()} </div>

                        </Cell>

                    </Grid>
                   
                    

            

            </div>
        )
    }
}



export default Projecten;