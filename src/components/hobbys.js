import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Hobbys extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={2}>
                        <h4>{this.props.hobby}</h4>
                    </Cell>
                    <Cell col={2}>
                        <div className="cv-icons">
                     <i className={this.props.icon} aria-hidden="true" />
                     </div>
                    </Cell>
                </Grid>
                
            </div>

        )

    }

}

export default Hobbys;