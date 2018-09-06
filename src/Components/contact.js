import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <div className="contact-grid"> 
                    <Grid>
                        <Cell col={6}>
                            <h2>Andrew Flory</h2>
                            <img
                                className="bitmoji"
                                src={"/images/drew.png"}
                                alt="avatar"
                                style={{height: "250px"}}
                            />
                            <p style={{width: '75%', margin: 'auto', paddingTop: '1em', fontSize: '19px'}} >
                            “Imagination is more important than knowledge.  For knowledge is limited, whereas imagination embraces the entire world,
                             stimulating progress, giving birth to evolution.” — Albert Einstein
                            </p>
                        
                        </Cell>
                        <Cell col={6}>
                            <h2>Contact Me</h2>
                            <hr/>


                            <div className="contact-list">
                                <List>
                                    <ListItem>
                                      <ListItemContent style={{fontSize: '22px', fontFamily: 'Didact Gothic'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        954-826-6416
                                      </ListItemContent>
                                    </ListItem>

                                    <ListItem>
                                      <ListItemContent style={{fontSize: '22px', fontFamily: 'Didact Gothic'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        Ajflory9@yahoo.com
                                      </ListItemContent>
                                    </ListItem>

                                    <ListItem>
                                      <ListItemContent style={{fontSize: '22px', fontFamily: 'Didact Gothic'}}>
                                        <i className="fa fa-linkedin" aria-hidden="true"/>
                                        <a href="https://www.linkedin.com/in/andrewflory/" style={{textDecoration: 'none', color: 'black'}} target="_blank">www.linkedin.com/in/andrewflory/</a>
                                      </ListItemContent>
                                    </ListItem>
                                </List>
                            </div>

                            

                        </Cell>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default Contact;