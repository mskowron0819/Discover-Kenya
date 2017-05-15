import React from 'react';
import Slider from './slider.jsx';
var imgData = [
    {
        id         : "slide1",
        imagePath  : '../img/beaches.jpg',
        imageAlt   : "Slide 1 Image",
        actionHref : 'href',
        link       : 'img1 hello one',
    },
    {
        id         : "slide2",
        imagePath  : '../img/masaje.jpg',
        imageAlt   : "Slide 2 Image",
        actionHref : 'href',
        link       : 'img2 hello two',
    },
    {
        id         : "slide3",
        imagePath  : '../img/gepard.jpg',
        imageAlt   : "Slide 3 Image",
        actionHref : 'href',
        link       : 'img3 hello three',
    },
];
class Article extends React.Component{
    render(){
        return <div className="article">{this.props.children}</div>
    }
}
class MainSection extends React.Component{
    render(){
        return <div className="main">
            <Slider imgData={imgData}/>
            <div>
                <Article>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, atque!</p>
                </Article>
                <Article>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, atque!</p>
                </Article>
                <Article>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, atque!</p>
                </Article>
            </div>
        </div>
    }
}
export default MainSection;