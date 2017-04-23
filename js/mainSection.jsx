import React from 'react';
import logo from '../img/kenya-_flag_clipped_rev_1.png';
import Slider from './Slider.jsx';

class Navigation extends React.Component{
    render(){
        return <nav>
            <img src={logo}/>
        </nav>
    }
}
class MainSection extends React.Component{
    render(){
        return <div className="main">
            <Navigation/>
            <Slider/>
{/*            <h1>Discover wildness of Kenya</h1>*/}
        </div>
    }
}
export default MainSection;