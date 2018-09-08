import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class About extends Component {
    render() {
        return(
            <div className="about-body">
                <Grid className="about-grid">
                    <Cell col={6}>
                        <img className="about-pic" src="http://www4.pictures.lonny.com/gi/Andrew+Flory+lRmZ0AHIVPcm.jpg"/>
                    </Cell>
                    <Cell col={6}>
                       <p>
                           My name is Andrew Flory.
                       </p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;