import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/Technology.webp";
import Common from './Common';

const Home =()=>{
    return(
        <>
        <Common 
            namess="Grow Your Buisness  With Our organized group's ability compasses Design, Branding, 
            User Experience (UX/UI), Development, e-Commerce, Social Media, Mobile, Search and Analytics.
             We develop modified, propelled promoting and exchanges answers for business "
            imgsrc={web}
            visit="/Services"
            btname="Get Started"
 />
        </>




    );
};

export default Home;