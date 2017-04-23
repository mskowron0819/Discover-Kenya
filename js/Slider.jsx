import React from 'react';
import classNames from 'classnames';
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
// Slides
class Slides extends React.Component{
    render() {
        var slides = this.props.data.map((slide, index) =>{
            var isActive = this.props.currentSlide === index;
            return <Slide active={isActive} key={slide.id} imagePath={slide.imagePath} imageAlt={slide.imageAlt}/>
        });
        return <div className="slides">
                {slides}
            </div>
    }
}
// Single Slide
class Slide extends React.Component{
    render() {
        var classes = classNames({
            'slide': true,
            'slide--active': this.props.active
        });
        return (
            <div className={classes}>
                <img src={this.props.imagePath} alt={this.props.imageAlt} />
                <a href={this.props.actionHref}></a>
            </div>
        );
    }
}
// Prev and Next buttons
class Controls extends React.Component{
    handleTogglePrev = () => {
        if ( typeof this.props.onTogglePrev === 'function' ){
            this.props.onTogglePrev();
        }
    }
    handleToggleNext = () => {
        if ( typeof this.props.onToggleNext === 'function' ){
            this.props.onToggleNext();
        }
    }
    render(){
        return <div className="controls">
                <div className="toggle toggle--prev" onClick={this.handleTogglePrev}>Prev</div>
                <div className="toggle toggle--next" onClick={this.handleToggleNext}>Next</div>
            </div>
    }
}
// Pagination
class Pagination extends React.Component{
    handleToggleSlide = (e,id) => {
        if ( typeof this.props.onToggleSlide === 'function' ){
            this.props.onToggleSlide(e,id);
        }
    }
    render() {
            let pagination = this.props.data.map((page, index) => {
                let isActive = this.props.currentSlide === index;
                let classes = classNames({
                    'pager': true,
                    'page--active': isActive,
                });
            return <span className={classes} id={page.id} key={page.id} title={page.title} onClick={e=>this.handleToggleSlide(e,page.id)}> hello</span>
        });
            return <div className="pagination">
                {pagination}
            </div>
    }
}
class Slider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentSlide: 0,
            data: imgData,
        }
    }
    handlePrevClick = () => {
        let current = this.state.currentSlide;
        let prev = current - 1;
        if (prev < 0) {
            prev = this.state.data.length - 1;
        }
        this.setState({
            currentSlide: prev,
        })
    }
    handleNextClick = () => {
        let current = this.state.currentSlide;
        var next = current + 1;
        if (next > this.state.data.length - 1) {
            next = 0;
        }
        this.setState({
            currentSlide : next,
        })
    }
    handleSlideToggle = (e,id) => {
        var index = this.state.data.map(data => {
            return data.id;
        });
        var currentIndex = index.indexOf(id);
        this.setState({
            currentSlide : currentIndex,
        })
    }
    render(){
        return <div className="slider">
            <Slides data={this.state.data} currentSlide={this.state.currentSlide}/>
            <Pagination data={this.state.data} currentSlide={this.state.currentSlide} onToggleSlide={this.handleSlideToggle}/>
            <Controls currentSlide={this.state.currentSlide} data={this.state.data} onTogglePrev={this.handlePrevClick} onToggleNext={this.handleNextClick}/>
        </div>
    }
}
export default Slider;