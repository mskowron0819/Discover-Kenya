import React from 'react';
import Slider from './slider.jsx';

import img2 from './img/masaje.jpg';
import img3 from './img/gepard.jpg';
var imgData = [
    {
        id         : "slide1",
        imagePath  : './img/beaches.jpg',
        imageAlt   : "Slide 1 Image",
        actionHref : 'href',
        action     : 'img1',
    },
    {
        id         : "slide2",
        imagePath  : './img/masaje.jpg',
        imageAlt   : "Slide 2 Image",
        actionHref : 'href',
        action     : 'img2',
    },
    {
        id         : "slide3",
        imagePath  : './img/gepard.jpg',
        imageAlt   : "Slide 3 Image",
        actionHref : 'href',
        action     : 'img3',
    },
];
class MainSection extends React.Component{
    render(){
        return <div className="main">
            <Slider imgData={imgData}/>
{/*            <h1>Discover wildness of Kenya</h1>*/}
        </div>
    }
}
export default MainSection;