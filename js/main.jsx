import React from 'react';
import Slider from './slider.jsx';
import {Link} from 'react-router';
var imgData = [
    {
        id         : "slide1",
        imagePath  : '../img/beaches.jpg',
        imageAlt   : "Slide 1 Image",
        actionHref : 'href',
        // action     : 'img1',
        link       : <Link to='/beaches'>img1 hello one</Link>,
    },
    {
        id         : "slide2",
        imagePath  : '../img/masaje.jpg',
        imageAlt   : "Slide 2 Image",
        actionHref : 'href',
        // action     : 'img2',
        link       : <Link to='/culture'>img2 hello two</Link>,
    },
    {
        id         : "slide3",
        imagePath  : '../img/gepard.jpg',
        imageAlt   : "Slide 3 Image",
        actionHref : 'href',
        // action     : 'img3',
        link       : <Link to='/wildLife'>img3 hello three</Link>,
    },
];
class MainSection extends React.Component{
    render(){
        return <div className="main">
            <Slider imgData={imgData}>{this.props.children}
            </Slider>
            <div>
                <h1>Discover wildness of Kenya</h1>
            </div>
        </div>
    }
}
export default MainSection;