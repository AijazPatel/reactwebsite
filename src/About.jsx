import React from 'react';
import {NavLink} from 'react-router-dom';
import Common from './Common';
import web from './images/About.jpg';

const About =()=>{
    return(
<>
<Common 
names= "Over the years, we have worked with brand-new startups. We help ambitious businesses like yours generate more profits by building awareness,
driving web traffic, connecting with customers, and growing overall sales. Give us a call."
imgsrc={web}
visit="/Contact"
btname="Contact Now" />

</>

    );
};

export default About;