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
                                src={"/images/drew.png"}
                                alt="avatar"
                                style={{height: "250px"}}
                            />
                            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}} >
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                        
                        </Cell>
                        <Cell col={6}>
                            <h2>Contact Me</h2>
                            <hr/>


                            <div className="contact-list">
                                <List>
                                    <ListItem>
                                      <ListItemContent >Bryan Cranston</ListItemContent>
                                    </ListItem>
                                    <ListItem>
                                      <ListItemContent >Aaron Paul</ListItemContent>
                                    </ListItem>
                                    <ListItem>
                                      <ListItemContent >Bob Odenkirk</ListItemContent>
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