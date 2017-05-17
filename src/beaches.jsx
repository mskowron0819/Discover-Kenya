import React from 'react';
const beachesData = [
    {
        id         : "img1",
        imagePath  : '../beaches-img/beaches.jpg',
        imageAlt   : "Slide 1 Image",
        actionHref : '/beaches/mombasa',
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
class Beaches extends React.Component{
    render(){
        return <section className="wrapper">
            <div className="article"></div>
            <div className="article"></div>
            <div className="article"></div>
            <div className="article"></div>
            <div className="article"></div>
            <div className="article"></div>
            <div className="article"></div>
            <div className="article"></div>
        </section>
    }
}
export default Beaches;