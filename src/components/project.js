import React, { Component } from 'react';
import { Card, CardMedia, CardContent, CardActionArea, Typography, Grid } from '@mui/material';



class Project extends Component {



    render() {

        return (
          
            <div style={{paddingTop: '4em', padding: '5em'}} className="zoom-box">
  <a href={this.props.link}>  </a>
                <Grid item lg={12} xs={12} >
                    <Card sx={{ maxWidth: 345 , minHeight: 300}} >
                        <CardActionArea href={this.props.link}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={this.props.img}
                                alt="Image"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {this.props.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" >
                                    {this.props.body}
                                   
                                </Typography>
                            </CardContent>
                            
                        </CardActionArea>
                        {/* <CardActions>
                            <Button href={this.props.link}>
                                 {this.props.button}
                            </Button>
                        </CardActions> */}
                    </Card>
                </Grid>
               
            </div>
           

        )
    }
}



export default Project;