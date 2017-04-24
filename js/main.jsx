import React from 'react';
import Slider from './slider.jsx';
import img1 from '../img/Malindi-Beach-Kenya2-min.jpg';
import img2 from '../img/hugh-sitton-42-25853252-2048x1324-min.jpg';
import img3 from '../img/18-min.jpg';
var imgData = [
    {
        id         : "slide1",
        imagePath  : img1,
        imageAlt   : "Slide 1 Image",
        actionHref : 'href',
        action     : 'img1',
    },
    {
        id         : "slide2",
        imagePath  : img2,
        imageAlt   : "Slide 2 Image",
        actionHref : 'href',
        action     : 'img2',
    },
    {
        id         : "slide3",
        imagePath  : img3,
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