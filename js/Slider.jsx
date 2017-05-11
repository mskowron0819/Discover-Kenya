import React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router';
import LeftArrow from 'react-icons/lib/fa/angle-double-left';
import RightArrow from 'react-icons/lib/fa/angle-double-right';
import ReactTouchEvents from "react-touch-events";

// Slides
class Slides extends React.Component{
    handleSwipe (direction) {
        switch (direction) {
            case "top":
            case "bottom":
            case "left":
            case "right":
                console.log(`you swiped ${direction}`)
        }
    }
    render() {
        var slides = this.props.data.map((slide, index) =>{
            var isActive = this.props.currentSlide === index;
            return  <ReactTouchEvents onSwipe={ this.handleSwipe.bind(this) } key={slide.id}><Slide active={isActive} key={slide.id} imagePath={slide.imagePath} imageAlt={slide.imageAlt} imageAction={slide.action} link={slide.link}/></ReactTouchEvents>
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
        return <div className={classes}>
                <div className="sliderImg" style={{backgroundImage: `url(${this.props.imagePath})`}}>
                    <h2 className="slider-text">
                    {this.props.link}
                    </h2>
                </div>
            </div>
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
            <div className="toggle--prev" onClick={this.handleTogglePrev}>
                <div className="toggle">
                    <LeftArrow size={90} color='#FFF'/>
                </div>
            </div>
            <div className="toggle--next" onClick={this.handleToggleNext}>
                <div className="toggle">
                    <RightArrow size={90} color='#FFF'/>
                </div>
            </div>
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
            return <span className={classes} id={page.id} key={page.id} title={page.title} onClick={e=>this.handleToggleSlide(e,page.id)}></span>
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
            data: this.props.imgData,
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
    componentDidMount(){
        this.setIntervalId = setInterval(()=>{

            if(this.state.currentSlide === this.state.data.length - 1){
                this.setState({
                    currentSlide: 0,
                })
            }else{
                this.setState({
                    currentSlide: this.state.currentSlide + 1,
                })
            }
        },4500);
    }
    componentWillUnmount(){
        clearInterval(this.setIntervalId);
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
/*

import React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router';
import LeftArrow from 'react-icons/lib/fa/angle-double-left';
import RightArrow from 'react-icons/lib/fa/angle-double-right';

// Slides
class Slides extends React.Component{
    render() {
        var slides = this.props.data.map((slide, index) =>{
            var isActive = this.props.currentSlide === index;
            return <Slide active={isActive} key={slide.id} imagePath={slide.imagePath} imageAlt={slide.imageAlt} imageAction={slide.action} link={slide.link}/>
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
        return <div className={classes}>
            <div className="sliderImg" style={{backgroundImage: `url(${this.props.imagePath})`}}>
                <h2 className="slider-text">
                    {this.props.link}
                </h2>
            </div>
        </div>
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
            <div className="toggle--prev" onClick={this.handleTogglePrev}>
                <div className="toggle">
                    <LeftArrow size={90} color='#FFF'/>
                </div>
            </div>
            <div className="toggle--next" onClick={this.handleToggleNext}>
                <div className="toggle">
                    <RightArrow size={90} color='#FFF'/>
                </div>
            </div>
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
            return <span className={classes} id={page.id} key={page.id} title={page.title} onClick={e=>this.handleToggleSlide(e,page.id)}></span>
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
            data: this.props.imgData,
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
    componentDidMount(){
        this.setIntervalId = setInterval(()=>{

            if(this.state.currentSlide === this.state.data.length - 1){
                this.setState({
                    currentSlide: 0,
                })
            }else{
                this.setState({
                    currentSlide: this.state.currentSlide + 1,
                })
            }
        },4500);
    }
    componentWillUnmount(){
        clearInterval(this.setIntervalId);
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
*/
