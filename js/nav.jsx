import React from 'react';
import Link from 'react-router';
import logo from '../img/kenya-_flag_clipped_rev_1.png';
import MainSection from './main.jsx';
import WildLife from './wildLife.jsx';
import Culture from './culture.jsx';
import Beaches from './beaches.jsx';
import Safari from './safari.jsx';
import NotFound from './notFound.jsx';

class Navigation extends React.Component{
    render(){
        return <nav>
            <img src={logo}/>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/wildLife">Wild Life</Link></li>
                    <li><Link to="/culture">Culture</Link></li>
                    <li><Link to="/beaches">Beaches</Link></li>
                    <li><Link to="/safari">Safari</Link></li>
                </ul>
                {this.props.children}
            </div>
        </nav>
    }
}
export default Navigation;