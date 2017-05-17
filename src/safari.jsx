import React from 'react';
import {Link} from 'react-router';

const safariData = {
    articles: [
        {
            id         : "img1",
            imagePath  : '../img/safari-img/ballonSafari.jpeg',
            imageAlt   : "Ballon Safari",
            url        : 'balloonSafari',
            link       : 'Maasai Mara Balloon Safari',
            article    : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, eligendi.',
        },
        {
            id         : "img2",
            imagePath  : '../img/safari-img/helicopterSafari.jpg',
            imageAlt   : "Helicopter Safari",
            url        : 'helicopterSafari',
            link       : 'Helicopter Safari',
            article    : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, eligendi.',
        },
        {
            id         : "img3",
            imagePath  : '../img/safari-img/walkingSafari.jpg',
            imageAlt   : "Slide 3 Image",
            url        : 'walkingSafari',
            link       : 'Walking Safari',
            article    : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, eligendi.',
        },
    ],
        all: function() { return this.articles},
        get: function(id) {
            const isArticle = a => a.url === id
            return this.articles.find(isArticle)
        }
}


export class SafariArticle extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const article = safariData.get(this.props.params.url);
        if (!article) {
            return <div>Sorry, article was not found</div>
        }
        return <article className="article-page">
                <h1>{article.link}</h1>
                <h2>{article.article}</h2>
                <Link to='safari'>Back</Link>
            </article>
    }
}
export class Safari extends React.Component{
    render(){
        let articles = safariData.all().map((img) =>{
            return  <div className="article article-safari" style={{backgroundImage: `url(${img.imagePath})`}} key={img.id} alt={img.imageAlt}><Link to={`safari/${img.url}`}>{img.link}</Link></div>
        });
        return <section className="wrapper">
            {articles}
        </section>
    }
}
