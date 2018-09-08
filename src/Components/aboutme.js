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
                    <Cell col={6} style = {{paddingRight: '5rem', fontFamily: 'Didact Gothic', color: 'white', fontSize: '21px', marginTop: '4rem'}}>
                       <p>
                           Hello, my name is Andrew Flory. I was born in Miami, FL but was raised in Miramar, FL. Growing up I was heavily influenced by sports. 
                           I grew up playing football, basketball and also ran track. My parents were huge supporters and never missed any of my games or track meets. I ended up receiving 
                           a full ride scholarship to play D1 football for Central Michigan University. I had an amazing experience there and those memories will 
                           stay with me forever. I ended up injuring my knee my senior year of college and was unable to rehab it back to 100% agian. Therefore, I was
                           forced to make a sudden career change. Growing up I did not have much time for extra curricular ativities but I did know that I loved video games and technology. 
                           I have an uncle who is a web developer for Nokia, and when I was young I would always see him with his laptop working on some project. I had no clue back then 
                           that what he was doing was called 'Programming', but him being able to afford a nice house and to work from home really had me intersted into what 
                           his job title was. So, after my football career came to an end, I moved back home from Michigan and began learning programming. Free tutorials 
                           after free tutorials I began to pick up some basic programming knowledge; creating a solid foundation for myself in my journey to become a web developer.
                           After creating a few basic landing page sites I decided to attend FIU to pursue my Computer Science Degree. I ended up only attendeding FIU for one semester. 
                           The FIU computer science courses that I took weren't great. The instructor wasn't teaching us to code in a way that actually helped me learn what I needed 
                           to learn in order to be a great web developer. So I started looking around the internet for some more online courses, and came across an AD for a web development 
                           bootcamp called 'Ironhack'. I read more about Ironhack and ultimately decided that I would take off from FIU for a summer and complete this 9-week web development
                           bootcamp. We were taught Javascript, Angular, Node, MongoDB, Mongoose, and Express and used those technologies to create Full Stack CRUD applications as our projects
                           throughout the course. Our teacher was a programming prodigy and I still to this day admire his intellect and passion for development. He taught us that in order 
                           to learn a new skill you need to dig deep and focus on the basics of that skill. He told us to learn the 'what', 'why', and 'how' about languages and their behavior 
                           so that we could then speed up the learning process. So, here I am, a former D1 collegiate athlete who made the transition into the tech world and couldn't be happier 
                           with my decision. Currently I'm on the job hunt and can't wait to get my foot into the tech industry!
                       </p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;