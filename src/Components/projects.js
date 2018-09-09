import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
    constructor(props){
        super(props);
            this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
            <div className="projects-section">
              <div className="projects-grid">

                {/* Project 1 */}
                <Card shadow={6} style={{minWidth: '450', margin: 'auto', border: '2px solid black'}}>
                  <CardTitle style={{ color: 'black', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}}>fullyBooked</CardTitle>
                  <CardText>
                        A full stack CRUD app where users can sign up and create either a freelancer profile or a regular user profile. The purpose of the app is to help connect freelancers with people or 
                        companies who need their services. Freelancers can create a weekly schedule that the users can see and then book appointment times. The users can search for freelancers as well.
                  </CardText>
                  <CardActions border>
                    <Button colored href="https://github.com/DrewFlory/fullyBooked" target="_blank">GitHub</Button>
                    <Button colored href="https://fully-booked.herokuapp.com/" target="_blank">Live Demo</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>

                {/* Project 2 */}
                <Card shadow={6} style={{minWidth: '450', margin: 'auto', border: '2px solid black'}}>
                  <CardTitle style={{color: 'black', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}}>QuickFit</CardTitle>
                  <CardText>
                      A full stack CRUD app where users can sign up and create an account. The purpose of the app is to help motivate users to reach their fitness goals daily. On my app there are over 50+ exercises
                      with short details of each one. Users can create daily workout routines and log them on their profile.
                  </CardText>
                  <CardActions border>
                    <Button colored href="https://github.com/DrewFlory/full-stack-app" target="_blank">GitHub</Button>
                    <Button colored href="https://quickfit-1.herokuapp.com/" target="_blank">Live Demo</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>

              </div>
            </div>
            )
            } else if(this.state.activeTab === 1){
            return(
              <div className="projects-section">
                <div className="projects-grid">

                  {/* Project 1 */}
                  <Card shadow={6} style={{minWidth: '450', margin: 'auto', border: '2px solid black'}}>
                    <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1000px-React-icon.svg.png) center / cover'}}>To-Do-List</CardTitle>
                    <CardText>
                          A full stack CRUD app using Firebase. The Firebase Realtime Database is a cloud-hosted database. Users can can add, remove and edite items on their list.
                    </CardText>
                    <CardActions border>
                      <Button colored href="https://github.com/DrewFlory/react-firebase-to-do-list" target="_blank">GitHub</Button>
                      <Button colored href="">Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                      <IconButton name="share" />
                    </CardMenu>
                  </Card>

                  {/* Project 2 */}
                  <Card shadow={6} style={{minWidth: '450', margin: 'auto', border: '2px solid black'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1000px-React-icon.svg.png) center / cover'}}>Weather-App</CardTitle>
                    <CardText>
                        An app created with React. Using a weather API i'm able to help users figure out what the current forecast is. You can search your city and get real time weather.
                    </CardText>
                    <CardActions border>
                      <Button colored href="https://github.com/DrewFlory/react-weather-app" target="_blank">GitHub</Button>
                      <Button colored href="">Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                      <IconButton name="share" />
                    </CardMenu>
                  </Card>

                  {/* Project 3 */}
                  <Card shadow={6} style={{minWidth: '450', margin: 'auto', border: '2px solid black'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1000px-React-icon.svg.png) center / cover'}}>My Portfolio</CardTitle>
                    <CardText>
                        An app created with React. My portfolio site includes my past projects, my current contact info, and my up to date resume. 
                    </CardText>
                    <CardActions border>
                      <Button colored href="https://github.com/DrewFlory/react-portfolio" target="_blank">GitHub</Button>
                      <Button colored href="">Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                      <IconButton name="share" />
                    </CardMenu>
                  </Card>

                </div>
              </div>
            )
            

        }  else if(this.state.activeTab === 2) {
            return (
            <div className="projects-section">
              <div className="projects-grid">

              {/* Project 1 */}
              <Card shadow={6} style={{minWidth: '450', margin: 'auto', border: '2px solid black'}}>
                <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW3FbaccZY0jaCvAvRUr_3mViRFxHfwiEMudM5rXbX3CJD47LAeg) center / cover'}}>Secure The Henny</CardTitle>
                <CardText>
                     JavaScript based "Pac-Man" inspired game where users control their player with arrow keys. The goal of the game is to avoid the basketball hoops and collect the bottles to win the game.
                </CardText>
                <CardActions border>
                  <Button colored href="https://github.com/DrewFlory/fullyBooked" target="_blank">GitHub</Button>
                  <Button colored href="https://drewflory.github.io/jr-game/game-project/homepage.html" target="_blank">Live Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>

            </div>
          </div>
            )
        }
      }

    render() {
        return(
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Angular</Tab>
                    <Tab>React</Tab>
                    <Tab>Express</Tab>
                </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
            </div>
        )
    }
}

export default Projects;