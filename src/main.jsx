import React from 'react';
import Slider from './slider.jsx';
const imgData = [
    {
        id         : "slide1",
        imagePath  : '../img/beaches.jpg',
        imageAlt   : "Slide 1 Image",
        actionHref : 'href',
        link       : <h2><strong>Explore Africa</strong><br /> during amazing safari tours</h2>,
    },
    {
        id         : "slide2",
        imagePath  : '../img/masaje.jpg',
        imageAlt   : "Slide 2 Image",
        actionHref : 'href',
        link       : <h2><strong>Explore Africa</strong><br /> during amazing safari tours</h2>,
    },
    {
        id         : "slide3",
        imagePath  : '../img/gepard.jpg',
        imageAlt   : "Slide 3 Image",
        actionHref : 'href',
        link       : <h2><strong>Explore Africa</strong><br /> during amazing safari tours</h2>,
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
            <section className="wrapper">
                <Article>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, atque!</p>
                </Article>
                <Article>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, atque!</p>
                </Article>
                <Article>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, atque!</p>
                </Article>
            </section>
        </div>
    }
}
export default MainSection;