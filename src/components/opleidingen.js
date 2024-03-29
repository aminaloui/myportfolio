import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Opleidingen extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>

                        <p>{this.props.startYear} - {this.props.endYear} &nbsp;	<i className={this.props.icon} aria-hidden="true"></i></p>



                    </Cell>
                    <Cell col={8}>

                        <h4 style={{ marginTop: '0px' }}>{this.props.schoolName}</h4>
                        <p>{this.props.schoolDescription}</p>
                    </Cell>
                </Grid>
            </div>

        )

    }

}

export default Opleidingen;