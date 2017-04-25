import React from 'react';
import {Link} from 'react-router';
import logo from '../img/kenya-_flag_clipped_rev_1.png';

class Navigation extends React.Component{
    render(){
        return <div><nav>
            <div className="logo"><Link to='/'><img src={logo} alt='logo'/></Link></div>
            <div className="nav-bar">
                <ul>
                    <li><Link to='/wildLife'>Wild Life</Link></li>
                    <li><Link to='/culture'>Culture</Link></li>
                    <li><Link to='/beaches'>Beaches</Link></li>
                    <li><Link to='/safari'>Safari</Link></li>
                </ul>
            </div>
        </nav>
            {this.props.children}
        </div>

    }
}
export default Navigation;