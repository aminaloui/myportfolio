import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
    render() {
        return (
            <Grid>
                <Cell col={12}>
                <div style={{display: 'block'}}>{this.props.skill} <ProgressBar style={{margin: '15px;', width: '75%'}} progress={this.props.progress} buffer={25} /> </div>
                </Cell>

            </Grid>
        );
    }

}

export default Skills